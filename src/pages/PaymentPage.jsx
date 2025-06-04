import React from 'react'
import '../styles/stylePage/PaymentPage.css'
import InfoShop from '../components/UI/InfoShop/InfoShop'
import PaymentCard from '../components/UI/PaymentCard/PaymentCard'
import masterCard from '../assets/icons/footer/mastercard.svg'
import visa from '../assets/icons/footer/visa.svg'
import sbp from '../assets/icons/sbp.svg'

function PaymentPage() {
  return (
    <div className="page">
      <div className="payment__namepage">PAYMENT</div>

      <div className="payment__flex">
        <div className="payment__card">
          <PaymentCard
            name="Credit card"
            description="All transactions are secure and encrypted"
            fee="10% fee"
            cN="payment_card__width"
          >
            <img src={masterCard} alt="" />
            <img src={visa} alt="" />
          </PaymentCard>

          <div className='payment__card_flex'>
            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src={sbp} alt="" />
            </PaymentCard>

            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src={sbp}  alt="" />
            </PaymentCard>

            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src={sbp}  alt="" />
            </PaymentCard>
          </div>
        </div>

        <InfoShop textButton="Confirm" />
      </div>
    </div>
  )
}

export default PaymentPage
