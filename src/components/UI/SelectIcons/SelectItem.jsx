import React from 'react'
import cl from './SelectIcons.module.css'

function SelectIcon({ backgroundImg, name, path, ...props }) {
  return (
    <div {...props} className={cl.item}>
      <div className={cl.img} style={{
        backgroundImage: `url('${backgroundImg}')`
      }}></div>
      <img src={path} className={cl.icon} />
      <span className={cl.text}>{name}</span>
    </div>
  )
}

export default SelectIcon
