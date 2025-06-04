import React from 'react'
import IconModel from '../components/ComponentsPage/ModelPage/IconModel/IconModel'
import '../styles/stylePage/ProductPage.css'
import InfoModel from '../components/ComponentsPage/ModelPage/InfoModel/InfoModel'
import DetailsModel from '../components/ComponentsPage/ModelPage/DetailsModel/DetailsModel'
import DescriptionModel from '../components/ComponentsPage/ModelPage/DescriptionModel/DescriptionModel'

function ModelPage() {
  return (
    <div className="page">
      <div className="block__product">
        <div>
          <IconModel />
          <DescriptionModel/>
        </div>

        <div>
          <InfoModel />
          <DetailsModel />
        </div>
      </div>
    </div>
  )
}

export default ModelPage
