import React from 'react'
import img7 from '../../assets/img/image7.png'
import cl from './ModelItem.module.css'

function ModelItem() {
  return (
    <div>
      <img src={img7} alt="" className={cl.img} />
      <div className={cl.block}>
        <div>
          <div className={cl.name__modal}>Toyota GT86 TRD - 2014</div>
          <div className={cl.user__modal}>username</div>
        </div>

        <div className={cl.price__block}>
          <div className={cl.price}>$89.60</div>
          <div className={cl.sell}>-30%</div>
        </div>
      </div>
    </div>
  )
}

export default ModelItem
