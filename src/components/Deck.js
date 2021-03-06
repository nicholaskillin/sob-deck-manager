import { Button, StackView, Text } from '@planning-center/ui-kit'
import React, { useEffect, useState } from 'react'

import ActiveCardModal from './ActiveCardModal.js'
import _ from 'lodash'

function Deck({ deck, orientation }) {
  const [activeCard, setActiveCard] = useState()
  const [localDeck, setLocalDeck] = useState(deck.cards)
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(() => {
    setLocalDeck(_.shuffle(localDeck))
  }, [])

  function drawCard() {
    setActiveCard(_.sample(localDeck.shift()))
  }

  function shuffleDeck() {
    setLocalDeck(_.shuffle(deck.cards))
    setActiveCard()
  }

  function showModal() {
    setDisplayModal(true)
  }

  function hideModal() {
    setDisplayModal(false)
  }

  return (
    <div className="deck">
      <h2>
        {deck.game} {deck.name}
      </h2>
      <StackView distribution="center" axis="vertical" spacing={1}>
        <StackView distribution="center" axis="horizontal" spacing={2}>
          {localDeck.length > 0 && (
            <img
              alt={`${deck.game} ${deck.name} Card Back`}
              className={orientation === 'landscape' ? 'landscape' : ''}
              onClick={drawCard}
              src={deck.backImageURL}
            />
          )}
          {activeCard && (
            <img
              alt={activeCard}
              className={orientation === 'landscape' ? 'landscape' : ''}
              onClick={showModal}
              src={`/images/${_.camelCase(deck.game)}/${_.camelCase(
                deck.name
              )}/${_.camelCase(activeCard)}.png`}
            />
          )}
        </StackView>
        <StackView
          alignment="center"
          distribution="center"
          axis="horizontal"
          spacing={2}
        >
          <Text>{localDeck.length} left</Text>
          <Button
            onClick={shuffleDeck}
            disabled={localDeck.length === deck.cards.length}
            fontSize={18}
            title="Shuffle"
          />
        </StackView>
      </StackView>
      <ActiveCardModal
        activeCard={activeCard}
        deckName={deck.name}
        gameName={deck.game}
        onRequestClose={hideModal}
        orientation={orientation}
        show={displayModal}
      />
    </div>
  )
}

export default Deck
