import React from 'react'
import cl from './ModelShopElement.module.css'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'
import close from '../../../../assets/icons/close.svg'

function ModelShopElement({srcImg, nameModel, desModal, fromName, price, oldPrice}) {
  /*
  TODO сделать анимацию удаления, сделать ховер на крестик
  */

  /*
  TODO сделать декомпозцию компонента
  */
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
      <div className={cl.sell}>
        <ButtonContent>
          <img
            className={cl.img_sell}
            src={close}
            alt=""
          />
        </ButtonContent>

        <div>
          <span className={cl.old_price}>{oldPrice}</span>
          <span className={cl.price}>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default ModelShopElement
