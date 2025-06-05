import { useState, useRef } from 'react'
import HLScrollItem from './HLScrollItem'
import cl from './HorListScroll.module.css'

function HorListScroll() {
  // TODO сделать декомпозицию item в компоненте
  return (
    <div className={cl.main_block}>
      <div className={cl.main_block}>
        <HLScrollItem />
        <HLScrollItem />
        <HLScrollItem />
        <HLScrollItem />
        <HLScrollItem />
        <HLScrollItem />
      </div>
    </div>
  )
}

export default HorListScroll
