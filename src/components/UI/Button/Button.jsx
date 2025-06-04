import React from 'react'
import cl from './Button.module.css'

function Button({typeStyle, cN, children, ...props }) {
  return (
    <button {...props} className={`${cl.button} ${typeStyle==='blue' ? cl.button_blue: ''} ${cN}`}>
      {children}
    </button>
  )
}

export default Button
