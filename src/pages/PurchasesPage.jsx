import React from 'react'
import '../styles/stylePage/PurchasesPage.css'
import Search from '../components/UI/Search/Search'
import PurchasesElement from '../components/ComponentsPage/PurchasesPage/PurchasesElement/PurchasesElement'

function PurchasesPage() {
  return (
    <div className="page">
      <div className="shop__search_container">
        <div className="shop__search_h1">CART</div> <Search cN="shop__search" />
      </div>
      
      <div className='purchases__element_flex'>
          <PurchasesElement/>
          <PurchasesElement/>
          <PurchasesElement/>
        </div>
    </div>
  )
}

export default PurchasesPage
