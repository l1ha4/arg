import React from 'react'
import cl from './SearchInput.module.css'
import dollar from '../../../../assets/icons/dollar.svg'

function SearchInput() {
  return (
    <div className={cl.relative}>
      <img src={dollar} className={cl.img}/>
      <input className={cl.input} value={1000}/>
    </div>
    
  )
}

export default SearchInput