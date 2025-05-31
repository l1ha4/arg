import React from 'react'
import cl from './HorListWeek.module.css'

function HRWeekItem() {
  return (
    <div className={cl.block}>
      <div className={cl.title}>
        <div className={cl.icon_profile}></div>
        <div className={cl.title__text}>
          <span className={cl.title__username}>ELR</span>
          <span className={cl.title__num}>(600 reviews)</span>
        </div>
      </div>
      <div className={cl.image}></div>
    </div>
  )
}

export default HRWeekItem
