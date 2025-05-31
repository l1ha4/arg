import React from 'react'
import cl from './Search.module.css'

function Search({placeholder}) {
  return (
    <input className={cl.block} placeholder={placeholder}/>
  )
}

export default Search