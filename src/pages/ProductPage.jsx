import React from 'react'
import IconProduct from '../components/ComponentsPage/ProductPage/IconProduct/IconProduct'
import '../styles/stylePage/ProductPage.css'
import InfoProduct from '../components/ComponentsPage/ProductPage/InfoProduct/InfoProduct'

function ProductPage() {
  return (
    <div className="page">
      <div className='block__product'>
        <div>
          <IconProduct />
        </div>

        <InfoProduct/>
      </div>
    </div>
  )
}

export default ProductPage
