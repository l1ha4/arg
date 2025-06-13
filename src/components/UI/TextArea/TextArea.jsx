import React from 'react'
import cl from './TextArea.module.css'

function TextArea({cN, ...props}) {
  return (
    <textarea className={`${cN} ${cl.textarea}`} {...props}/>
  )
}

export default TextArea