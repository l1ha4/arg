import React from 'react'
import cl from './HorListScroll.module.css'

function HLScrollItem() {
  return (
    <div className={cl.block}>
      <div className={cl.icon}></div>
      <div className={cl.title}>
        <div className={cl.model}>Toyota GT86 TRD - 2014</div>
        <div className={cl.name}>from Name</div>
      </div>
    </div>
  )
}

export default HLScrollItem