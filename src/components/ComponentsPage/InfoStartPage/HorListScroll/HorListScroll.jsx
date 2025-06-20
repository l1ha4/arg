import { useState, useRef } from 'react'
import HLScrollItem from './HLScrollItem'
import cl from './HorListScroll.module.css'

function HorListScroll({arr, ...props}) {
  // TODO сделать декомпозицию item в компоненте
  return (
    <div className={cl.main_block} {...props}>
      <div className={cl.main_block}>
        {arr.map((item, index)=> <HLScrollItem item={item} key={index + 'HRScrollItem'}/>)}
      </div>
    </div>
  )
}

export default HorListScroll
