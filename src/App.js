import './App.css'

import { Divider, StackView } from '@planning-center/ui-kit'

import Deck from './Deck.js'
import React from 'react'

// Import Deck Data
// const forbiddenFortressEncounterDeck = require('./deckData/forbiddenFortress/encounters.json')
const forbiddenFortressMapDeck = require('./deckData/forbiddenFortress/map.json')

function App() {
  return (
    <div className="App">
      <StackView spacing={<Divider margin={2} />}>
        <Deck deck={forbiddenFortressMapDeck} />
      </StackView>
    </div>
  )
}

export default App
