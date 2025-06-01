import React from 'react'
import cl from './Button.module.css'

function Button({cN, children, ...props }) {
  return (
    <button {...props} className={`${cl.button} ${cN}`}>
      {children}
    </button>
  )
}

export default Button
