import './App.css'

import Deck from './Deck.js'
import React from 'react'
import { WrapView } from '@planning-center/ui-kit'

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
      <WrapView padding={2} spacing={2}>
        {decks.map((deck) => <Deck deck={deck.data} orientation={deck.orientation} />)}
      </WrapView>
    </div>
  )
}

export default App
