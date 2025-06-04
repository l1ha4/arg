import React from 'react'
import Search from '../components/UI/Search/Search'
import '../styles/stylePage/ShopPage.css'
import ModelShopElement from '../components/ComponentsPage/ShopPage/ModelShopElement/ModelShopElement'
import InfoShop from '../components/UI/InfoShop/InfoShop'
import img1 from '../assets/img/image6.png'

function ShopPage() {
  return (
    <div className="page">
      <div className="shop__search_container">
        <div className="shop__search_h1">CART</div> <Search cN="shop__search" />
      </div>

      <div className="shop__flex">
        <div className="shop__model">
          <ModelShopElement
            srcImg={img1}
            nameModel="Porsche 911 GT3 RS 992"
            desModal="Standard Use License (No Commercial)"
            fromName="from Name"
            price="$89.60"
            oldPrice="$128.00"
          />
          
          <ModelShopElement
            srcImg={img1}
            nameModel="Porsche 911 GT3 RS 992"
            desModal="Standard Use License (No Commercial)"
            fromName="from Name"
            price="$89.60"
            oldPrice="$128.00"
          />

          <ModelShopElement
            srcImg={img1}
            nameModel="Porsche 911 GT3 RS 992"
            desModal="Standard Use License (No Commercial)"
            fromName="from Name"
            price="$89.60"
            oldPrice="$128.00"
          />
        </div>
        <InfoShop textButton="Proceed to Checkout" />
      </div>
    </div>
  )
}

export default ShopPage
