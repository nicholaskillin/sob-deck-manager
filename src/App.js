import './App.css'

import { Divider, StackView } from '@planning-center/ui-kit'

import Deck from './Deck.js'
import React from 'react'

// Import Deck Data
let decks = [
  require('./deckData/forbiddenFortress/artifacts.json'),
  require('./deckData/forbiddenFortress/darkness.json'),
  require('./deckData/forbiddenFortress/encounters.json'),
  require('./deckData/forbiddenFortress/growingDread.json'),
  require('./deckData/forbiddenFortress/loot.json'),
  require('./deckData/forbiddenFortress/map.json')
]

function App() {
  return (
    <div className="App">
      <StackView spacing={<Divider margin={2} />}>
        {decks.map((deck) => <Deck deck={deck} />)}
      </StackView>
    </div>
  )
}

export default App
