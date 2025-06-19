import React, { useState, useRef, useEffect } from 'react'
import cl from './SelectChoice.module.css'
import ButtonContent from '../ButtonContent/ButtonContent'

function SelectChoice({ duration, keyReset, choice, setChoice, lengthChoice }) {
  const durationSeconds = duration / 1000

  return (
    <>
      <style>
        {`
          @keyframes fillProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>

      <div className={cl.select}>
        <div className={cl.choice}>
          <div
            className={cl.choice__element}
            key={keyReset}
            style={{
              height: '100%',
              width: '0%',
              animationName: 'fillProgress',
              animationDuration: `${durationSeconds}s`,
              animationTimingFunction: '',
              animationFillMode: 'forwards', // чтобы сохранить конечное состояние
            }}
          ></div>
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
    </>
  )
}

export default SelectChoice
