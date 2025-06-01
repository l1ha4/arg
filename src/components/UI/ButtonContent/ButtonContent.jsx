import React from 'react'
import cl from './ButtonContent.module.css'

function ButtonContent({ cN, children, ...props }) {
  return <button className={`${cl.button} ${cN}`} {...props}>{children}</button>
}

export default ButtonContent
