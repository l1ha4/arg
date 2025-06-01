import React, { useState } from 'react'
import cl from './SelectChoice.module.css'
import ButtonContent from '../ButtonContent/ButtonContent'

function SelectChoice() {
  return (
    <div className={cl.select}>
      <div className={cl.choice}>
        <div className={cl.choice__element}></div>
      </div>
      <div className={cl.select__elements}>
        <ButtonContent cN={cl.element}></ButtonContent>
        <ButtonContent cN={cl.element}></ButtonContent>
        <ButtonContent cN={cl.element}></ButtonContent>
        <ButtonContent cN={cl.element}></ButtonContent>
      </div>
    </div>
  )
}

export default SelectChoice
