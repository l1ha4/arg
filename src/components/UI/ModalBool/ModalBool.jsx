import React from 'react'
import cl from './ModalBool.module.css'
import Button from '../Button/Button'

function ModalBool() {
  return (
    <div className={cl.block}>
      <div className={cl.h1}>Error404</div>
      <div className={cl.h2}>Please try again in a few minutes.</div>
      <div className={cl.flex}>
        <Button cN={cl.button_blue} typeStyle='blue'>Repeat</Button>
        <Button cN={cl.button_black} typeStyle='black'>Close</Button>
      </div>
    </div>
  )
}

export default ModalBool
