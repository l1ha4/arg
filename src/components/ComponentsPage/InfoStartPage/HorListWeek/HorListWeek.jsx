import React from 'react'
import cl from './HorListWeek.module.css'
import HRWeekItem from './HRWeekItem'

function HorListWeek() {
  return (
    <div className={cl.main_block}>
      <HRWeekItem/>
      <HRWeekItem/>
      <HRWeekItem/>
    </div>
  )
}

export default HorListWeek