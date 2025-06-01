import React from 'react'
import cl from './Input.module.css'

function Input({cN, ...props}) {
  return (
    <input className={`${cl.input} ${cN}`} {...props}/>
  )
}

export default Input