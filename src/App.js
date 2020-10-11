import './App.css'

import { ThemeProvider, WrapView } from '@planning-center/ui-kit'

import Deck from './components/Deck.js'
import React from 'react'

// Import Deck Data
let decks = [
  {data: require('./deckData/forbiddenFortress/artifacts.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/darkness.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/encounters.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/growingDread.json'), orientation: 'landscape' },
  {data: require('./deckData/forbiddenFortress/loot.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/map.json'), orientation: 'portrait' },
  {data: require('./deckData/forbiddenFortress/threatLow.json'), orientation: 'portrait'},
  {data: require('./deckData/forbiddenFortress/threatMedium.json'), orientation: 'portrait'},
  {data: require('./deckData/forbiddenFortress/threatHigh.json'), orientation: 'portrait'},
  {data: require('./deckData/forbiddenFortress/threatEpic.json'), orientation: 'portrait'}
]

const
 theme = {
  breakpoints: {
    phone: 480,
    tablet: 720,
    desktop: 960,
  },
  colors: {
    primary: 'red-5',
    secondary: 'lime',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <WrapView padding={2} spacing={2}>
          {decks.map((deck) => <Deck deck={deck.data} orientation={deck.orientation} />)}
        </WrapView>
      </div>
    </ThemeProvider>
  )
}

export default App
