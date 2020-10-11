import {Button, Modal, StackView} from '@planning-center/ui-kit'

import React from 'react'
import _ from 'lodash'

function activeCardModal({ activeCard, gameName, deckName, onRequestClose, orientation, show }) {

  console.log(deckName)
  
  return (
    <Modal closeOnOutsideClick onRequestClose={onRequestClose} open={show} maxWidth={orientation === 'landscape' ? '670px' : '480px'}>
      <StackView alignment="center" spacing={2}>
      <img alt={activeCard}
              className={orientation === 'landscape' ? 'modal_landscape' : 'modal'}
              src={`/images/${_.camelCase(gameName)}/${_.camelCase(
                deckName
              )}/${_.camelCase(activeCard)}.png`} />
      </StackView>

      <StackView
        axis="horizontal"
        distribution="end"
        marginVertical={1}
        spacing={1}
      >
        <Button title="Close" variant="naked" onClick={onRequestClose} size="med" theme="primary"/>
      </StackView>
    </Modal>
  )
}


export default activeCardModal

{/* <div id="zoomModal" style={style}>
      <div id="zoomContent">
        <h2 style={{ color: 'black', textAlign: 'center' }}>
          {activeCard}
        </h2>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div id="used-modifier-cards">
            <img alt={activeCard} src={activeCard}  />
        </div>
      </div>
    </div> */}