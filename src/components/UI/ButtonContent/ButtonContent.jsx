import React from 'react'
import cl from './ButtonContent.module.css'


function ButtonContent({ cN, children, ...props }) {
  return <button className={`${cN} ${cl.button} `} {...props}>{children}</button>
}

export default ButtonContent
