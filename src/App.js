import './App.css'

import { Divider, StackView } from '@planning-center/ui-kit'

import Deck from './Deck.js'
import React from 'react'

// Import Deck Data
let decks = [
  {data: require('./deckData/forbiddenFortress/artifacts.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/darkness.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/encounters.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/growingDread.json'), orientation: 'landscape' },
  {data: require('./deckData/forbiddenFortress/loot.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/map.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/threatLow.json'), orientation: 'portrait'}
]

function App() {
  return (
    <div className="App">
      <StackView spacing={<Divider margin={2} />}>
        {decks.map((deck) => <Deck deck={deck.data} orientation={deck.orientation} />)}
      </StackView>
    </div>
  )
}

export default App
