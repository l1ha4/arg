import React from 'react'
import cl from './HorListWeek.module.css'
import HRWeekItem from './HRWeekItem'

function HorListWeek({arr, ...props}) {
  // TODO сделать декомпозицию item в компоненте
  return (
    <div className={cl.main_block} {...props}>
      <HRWeekItem/>
      <HRWeekItem/>
      <HRWeekItem/>
    </div>
  )
}

export default HorListWeek