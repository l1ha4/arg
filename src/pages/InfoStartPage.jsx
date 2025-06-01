import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/stylePage/StartInfoPage.css'
import MainPreview from '../components/ComponentsPage/InfoStartPage/MainPreview/MainPreview'
import SelectIcons from '../components/UI/SelectIcons/SelectIcons'
import HorListWeek from '../components/ComponentsPage/InfoStartPage/HorListWeek/HorListWeek'
import HorListScroll from '../components/ComponentsPage/InfoStartPage/HorListScroll/HorListScroll'
import InfoArg from '../components/ComponentsPage/InfoStartPage/InfoArg/InfoArg'

function InfoStartPage() {
  const icons = [
    { name: 'Clothing', path: 'src/assets/icons/select/t-shirt 1.svg' },
    { name: 'Aircraft', path: 'src/assets/icons/select/plane 1.svg' },
    { name: 'Vehicles', path: 'src/assets/icons/select/car 2.svg' },
    { name: 'Weapon', path: 'src/assets/icons/select/ak-47 1.svg' },
    { name: 'Industrial', path: 'src/assets/icons/select/factory 1.svg' },
    { name: 'Furniture', path: 'src/assets/icons/select/long-sofa 1.svg' },
  ]

  return (
    <div className="page">
      <MainPreview />
      <SelectIcons icon={icons} />

      <div className="week__block">
        <div className="h1">ARTISTS OF THE WEEK</div>
        <HorListWeek />
      </div>

      <div className="recent_block">
        <div className="h1">RECENT MODELS</div>
        <HorListScroll />
      </div>

      <InfoArg />
    </div>
  )
}

export default InfoStartPage
