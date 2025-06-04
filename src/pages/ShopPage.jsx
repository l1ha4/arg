import React from 'react'
import Search from '../components/UI/Search/Search'
import '../styles/stylePage/ShopPage.css'
import ModelShopElement from '../components/ComponentsPage/ShopPage/ModelShopElement/ModelShopElement'
import InfoShop from '../components/UI/InfoShop/InfoShop'

function ShopPage() {
  return (
    <div className="page">
      <div className="shop__search_container">
        <div className="shop__search_h1">CART</div> <Search cN="shop__search" />
      </div>

      <div className="shop__flex">
        <div className="shop__model">
          <ModelShopElement />
          <ModelShopElement />
          <ModelShopElement />
        </div>
        <InfoShop textButton='Proceed to Checkout'/>
      </div>
    </div>
  )
}

export default ShopPage
