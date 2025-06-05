import React from 'react'
import cl from './Button.module.css'

function Button({typeStyle, cN, children, ...props }) {
  return (
    <button {...props} className={`${cN} ${cl.button} ${typeStyle==='blue' ? cl.button_blue : cl.button_black}`}>
      {children}
    </button>
  )
}

export default Button
