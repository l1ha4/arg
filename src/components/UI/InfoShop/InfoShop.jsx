import React from 'react'
import cl from './InfoShop.module.css'
import Hr from '../Hr/Hr'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function InfoShop({ textButton }) {
  /*
  TODO сделать декомпозцию компонента
  */
  const navigate = useNavigate()
  return (
    <div className={cl.block}>
      <div className={cl.name_info}>
        <div className={cl.h1}>Order Summary</div>
        <div className={cl.h2}>@username465</div>
      </div>

      <div className={cl.flex_detail}>
        <div className={cl.detail}>
          <div className={cl.par_details}>Items (3)</div>
          <div className={cl.price}>$342</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Discount</div>
          <div className={cl.price}>$115.60</div>
        </div>
      </div>

      <Hr />

      <div className={cl.detail + ' ' + cl.margin_top}>
        <div className={cl.h3}>Total</div>
        <div className={cl.h4}>$226.40</div>
      </div>
      <div className={cl.button_div}>
        <Button
          cN={cl.button}
          onClick={() => navigate('/payment')}
          typeStyle="blue"
        >
          {textButton}
        </Button>
      </div>
    </div>
  )
}

export default InfoShop
