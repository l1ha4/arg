import React from 'react'
import cl from './ModelShopElement.module.css'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'

function ModelShopElement() {
  return (
    <div className={cl.block}>
      <img className={cl.img} src="src/assets/img/image 6.png" />

      <div className={cl.block_text}>
        <div className={cl.name_model_block}>
          <div className={cl.name_modal}>Porsche 911 GT3 RS 992</div>
          <div className={cl.description_modal}>
            Standard Use License (No Commercial)
          </div>
        </div>
        <div className={cl.from_name}>from Name</div>
      </div>
      <div className={cl.sell}>
        <ButtonContent>
          <img
            className={cl.img_sell}
            src="src/assets/icons/close.svg"
            alt=""
          />
        </ButtonContent>

        <div>
          <span className={cl.old_price}>$128.00 </span>
          <span className={cl.price}>X$89.60</span>
        </div>
      </div>
    </div>
  )
}

export default ModelShopElement
