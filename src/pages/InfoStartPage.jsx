import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/stylePage/StartInfoPage.css'
import MainPreview from '../components/ComponentsPage/InfoStartPage/MainPreview/MainPreview'
import SelectIcons from '../components/UI/SelectIcons/SelectIcons'
import HorListWeek from '../components/ComponentsPage/InfoStartPage/HorListWeek/HorListWeek'
import HorListScroll from '../components/ComponentsPage/InfoStartPage/HorListScroll/HorListScroll'
import InfoArg from '../components/ComponentsPage/InfoStartPage/InfoArg/InfoArg'
import clothing from '../assets/icons/select/tshirt.svg'
import aircraft from '../assets/icons/select/plane.svg'
import vehicles from '../assets/icons/select/car.svg'
import weapon from '../assets/icons/select/ak-47.svg'
import industrial from '../assets/icons/select/factory.svg'
import furniture from '../assets/icons/select/longsofa.svg'


function InfoStartPage() {
  const icons = [
    { name: 'Clothing', path: clothing},
    { name: 'Aircraft', path: aircraft },
    { name: 'Vehicles', path: vehicles },
    { name: 'Weapon', path: weapon },
    { name: 'Industrial', path: industrial },
    { name: 'Furniture', path: furniture },
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
