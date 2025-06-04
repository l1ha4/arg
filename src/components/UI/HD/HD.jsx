import React from 'react'
import cl from './HD.module.css'

function HD({ cN, children, ...props }) {
  return (
    <div {...props} className={`${cl.hd} ${cN}`}>
      {children}
    </div>
  )
}

export default HD
