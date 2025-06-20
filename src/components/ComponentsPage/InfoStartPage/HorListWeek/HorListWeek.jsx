import React from 'react'
import cl from './HorListWeek.module.css'
import HRWeekItem from './HRWeekItem'

function HorListWeek({arr, ...props}) {
  // TODO сделать декомпозицию item в компоненте
  return (
    <div className={cl.main_block} {...props}>
      {arr.map((item, index) => <HRWeekItem item={item} key={index + 'HorList'}/>)}
    </div>
  )
}

export default HorListWeek