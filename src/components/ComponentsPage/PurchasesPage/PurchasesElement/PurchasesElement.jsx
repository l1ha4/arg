import React from 'react'
import cl from './PurchasesElement.module.css'
import Button from '../../../UI/ButtonContent/ButtonContent'
import UploadsSvg from '../../../../assets/icons/modalWindow/UploadsSvg'

function PurchasesElement() {
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
      <div className={cl.block_button}>
        <Button className={cl.button}>
          <img src="src/assets/icons/download.svg" alt="" />
        </Button>
        <div>Purchased: 15/05/2025</div>
      </div>
    </div>
  )
}

export default PurchasesElement
