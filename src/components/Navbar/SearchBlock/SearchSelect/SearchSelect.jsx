import React, { useState } from 'react'
import gscl from '../SearchBlock.module.css'
import cl from './SearchSelect.module.css'
import select from '../../../../assets/icons/select.svg'

function SearchSelect({ name, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(name)


  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className={gscl.block__item}>
      <div className={cl.custom_select} onClick={toggleDropdown}>
        <div className={cl.select_selected}>{selectedOption}</div>
        {isOpen && (
          <div className={`${cl.select_items} ${gscl.block__item}`}>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className={cl.select_item}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        <img src={select} alt="" className={cl.select_img} />
      </div>
    </div>
  )
}

export default SearchSelect
