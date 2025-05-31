import React from 'react'
import SelectItem from './SelectItem'
import cl from './SelectIcons.module.css'

function SelectIcons() {
  return (
    <div className={cl.select}>
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
      <SelectItem name="Clothing" path="src/assets/icons/select/t-shirt 1.svg" />
    </div>
  )
}

export default SelectIcons
