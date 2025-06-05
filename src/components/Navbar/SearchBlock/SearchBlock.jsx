import React from 'react'
import cl from './SearchBlock.module.css'
import SearchSelect from './SearchSelect/SearchSelect'
import Hr from '../../UI/Hr/Hr'
import SearchInput from './SearchInput/SearchInput'

function SearchBlock() {
  const options = ['option1', 'option2', 'option3']
  return (
    <div className={cl.block}>
      <SearchSelect name="File formats" options={options} />

      <div className={cl.block__item}>
        <div className={cl.block_flex}>
          Price
          <div className={cl.hr}></div>
          From
          <SearchInput />
          <div className={cl.to}>To</div>
          <SearchInput />
        </div>
      </div>

      <div className={cl.block__item}>Game Ready</div>
      <div className={cl.block__item}>Low poly</div>
      <div className={cl.block__item}>Cars</div>
      <div className={cl.block__item}>Sport cars</div>
      <div className={cl.block__item}>Vehicles</div>
      <div className={cl.block__item}>Racing</div>
      <div className={cl.block__item}>TOYOTA</div>
      <div className={cl.block__item}>...</div>

      <SearchSelect name="Best match" options={options}/>

      <div className={cl.block__item}>Reset</div>
    </div>
  )
}

export default SearchBlock
