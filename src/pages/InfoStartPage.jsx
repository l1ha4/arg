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
    ('src/assets/icons/select/ak-47 1.svg',
    'src/assets/icons/select/car 2',
    'src/assets/icons/select/factory 1',
    'src/assets/icons/select/long-sofa 1'),
  ]

  return (
    <div className="page">
      <MainPreview />
      <SelectIcons path={icons} />

      <div className="week__block">
        <div className="h1">ARTISTS OF THE WEEK</div>
        <HorListWeek />
      </div>

      <div className="recent_block">
        <div className="h1">RECENT MODELS</div>
        <HorListScroll />
      </div>
      
      <InfoArg/>
      
    </div>
  )
}

export default InfoStartPage
