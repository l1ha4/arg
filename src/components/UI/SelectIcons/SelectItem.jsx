import React from 'react'
import cl from './SelectIcons.module.css'

function SelectIcon({ name, path, ...props }) {
  return (
    <div {...props} className={cl.item}>
      <img src={path} className={cl.icon} />
      <span className={cl.text}>{name}</span>
    </div>
  )
}

export default SelectIcon
