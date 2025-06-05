import React, { Children } from 'react'
import cl from './PaymentCard.module.css'
import H1 from '../H1/H1'
import HD from '../HD/HD'

function PaymentCard({ cN, name, description, fee, children, ...props }) {
  // TODO заменить ховер на постоянный выбор оплаты
  return (
    <div {...props} className={`${cl.card} ${cN}`}>
      <div className={cl.namecard__flex}>
        <div>
          <H1>{name}</H1>
          <HD cN={cl.des}>{description}</HD>
        </div>

        <div>{fee}</div>
      </div>

      <div className={cl.flex}>{children}</div>
    </div>
  )
}

export default PaymentCard
