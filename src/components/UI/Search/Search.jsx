import React, { useState } from 'react'
import Input from '../Input/Input'
import cl from './Search.module.css'

function Search({ cN, ...props }) {
  const [value, setValue] = useState('')
  return (
    <Input
      {...props}
      value={value}
      cN={`${cN} ${cl.search}`}
      placeholder="Search"
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Search
