import React from 'react'
import SelectItem from './SelectItem'
import cl from './SelectIcons.module.css'

function SelectIcons({ icon, ...props }) {

  return (
    <div {...props} className={cl.select}>
      {icon.map((item, index) => (
        <SelectItem name={item.name} path={item.path} key={index + item.name + item.path}/>
      ))}
    </div>
  )
}

export default SelectIcons
