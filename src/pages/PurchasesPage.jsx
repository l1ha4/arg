import React from 'react'
import '../styles/stylePage/PurchasesPage.css'
import Search from '../components/UI/Search/Search'
import PurchasesElement from '../components/ComponentsPage/PurchasesPage/PurchasesElement/PurchasesElement'
import img1 from '../assets/img/image1.png'

function PurchasesPage() {
  return (
    <div className="page">
      <div className="shop__search_container">
        <div className="shop__search_h1">CART</div> <Search cN="shop__search" />
      </div>

      <div className="purchases__element_flex">
        <PurchasesElement
          srcImg={img1}
          nameModel="Porsche 911 GT3 RS 992"
          desModal="Standard Use License (No Commercial)"
          fromName="from Name"
          date="Purchased: 15/05/2025"
        />
        <PurchasesElement
          srcImg={img1}
          nameModel="Porsche 911 GT3 RS 992"
          desModal="Standard Use License (No Commercial)"
          fromName="from Name"
          date="Purchased: 15/05/2025"
        />
        <PurchasesElement
          srcImg={img1}
          nameModel="Porsche 911 GT3 RS 992"
          desModal="Standard Use License (No Commercial)"
          fromName="from Name"
          date="Purchased: 15/05/2025"
        />
      </div>
    </div>
  )
}

export default PurchasesPage
