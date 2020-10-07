import './App.css'

import { Divider, StackView } from '@planning-center/ui-kit'

import Deck from './Deck.js'
import React from 'react'

// Import Deck Data
const forbiddenFortressArtifactsDeck = require('./deckData/forbiddenFortress/artifacts.json')
const forbiddenFortressEncounterDeck = require('./deckData/forbiddenFortress/encounters.json')
const forbiddenFortressLootDeck = require('./deckData/forbiddenFortress/loot.json')
const forbiddenFortressMapDeck = require('./deckData/forbiddenFortress/map.json')

function App() {
  return (
    <div className="App">
      <StackView spacing={<Divider margin={2} />}>
        <Deck deck={forbiddenFortressMapDeck} />
        <Deck deck={forbiddenFortressEncounterDeck} />
        <Deck deck={forbiddenFortressArtifactsDeck} />
        <Deck deck={forbiddenFortressLootDeck} />
      </StackView>
    </div>
  )
}

export default App
