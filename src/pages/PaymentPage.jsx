import React from 'react'
import '../styles/stylePage/PaymentPage.css'
import InfoShop from '../components/UI/InfoShop/InfoShop'
import PaymentCard from '../components/UI/PaymentCard/PaymentCard'

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
            <img src="src/assets/icons/footer/mastercard.svg" alt="" />
            <img src="src/assets/icons/footer/visa.svg" alt="" />
          </PaymentCard>

          <div className='payment__card_flex'>
            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src="src/assets/icons/sbp.svg" alt="" />
            </PaymentCard>

            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src="src/assets/icons/sbp.svg" alt="" />
            </PaymentCard>

            <PaymentCard
              name="SBP"
              description="VAT Included"
              fee="5% fee"
              cN="payment_card__standard"
            >
              <img src="src/assets/icons/sbp.svg" alt="" />
            </PaymentCard>
          </div>
        </div>

        <InfoShop textButton="Confirm" />
      </div>
    </div>
  )
}

export default PaymentPage
