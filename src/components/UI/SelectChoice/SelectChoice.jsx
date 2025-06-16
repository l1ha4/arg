import React, { useState } from 'react'
import cl from './SelectChoice.module.css'
import ButtonContent from '../ButtonContent/ButtonContent'

function SelectChoice({ progress, choice, setChoice, lengthChoice }) {
  return (
    <div className={cl.select}>
      <div className={cl.choice}>
        <div
          className={cl.choice__element}
          style={{
            width: `${progress}%`,
            transition: ' transition: width 0.1s ease-in-out',
          }}
        >
          {console.log(progress)}
        </div>
      </div>
      <div className={cl.select__elements}>
        {[...Array(lengthChoice)].map((_, index) => (
          <ButtonContent
            cN={choice === index ? cl.element_active : cl.element}
            key={index}
            index={index}
            onClick={() => setChoice(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectChoice
