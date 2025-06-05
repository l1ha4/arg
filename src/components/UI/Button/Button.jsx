import React from 'react'
import cl from './Button.module.css'

function Button({ typeStyle, cN, children, ...props }) {
  // TODO сделать ховер кнопки на blue-style:

  return (
    <button
      {...props}
      className={`${cN} ${cl.button} ${
        typeStyle === 'blue' ? cl.button_blue : ''
      }${
        typeStyle === 'black' ? cl.button_black : ''
      }${
        typeStyle === 'black_red_hover' ? cl.button_black_red_hover : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
