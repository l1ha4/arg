import React from 'react'
import cl from './H1.module.css'

function H1({cN, children, ...props}) {
  return (
    <div {...props} className={`${cl.h1} ${cN}`}>{children}</div>
  )
}

export default H1