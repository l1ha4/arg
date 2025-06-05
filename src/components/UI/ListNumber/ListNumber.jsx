import React from 'react'
import cl from './ListNumber.module.css'

function ListNumber() {
  return (
    <div className={cl.flex}>
      <div className={cl.block}>{'<'}</div>
      <div className={cl.block}>1</div>
      <div className={cl.block}>2</div>
      <div className={cl.block}>3</div>
      <div className={cl.block}>4</div>
      <div className={cl.block}>...</div>
      <div className={cl.block}>15</div>
      <div className={cl.block}>{'>'}</div>
    </div>
  )
}

export default ListNumber
