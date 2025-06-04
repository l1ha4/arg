import React from 'react'
import cl from './PurchasesElement.module.css'
import Button from '../../../UI/ButtonContent/ButtonContent'
import uploadsSvg from '../../../../assets/icons/download.svg'

function PurchasesElement({srcImg, nameModel, desModal, fromName, date}) {
  return (
    <div className={cl.block}>
      <img className={cl.img} src={srcImg} />

      <div className={cl.block_text}>
        <div className={cl.name_model_block}>
          <div className={cl.name_modal}>{nameModel}</div>
          <div className={cl.description_modal}>
            {desModal}
          </div>
        </div>
        <div className={cl.from_name}>{fromName}</div>
      </div>
      <div className={cl.block_button}>
        <Button className={cl.button}>
          <img src={uploadsSvg} alt="" />
        </Button>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default PurchasesElement
