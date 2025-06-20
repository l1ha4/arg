import React, { useState, useEffect } from 'react'
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
import car1 from '../assets/img/car1/car1.png'
import car2 from '../assets/img/car1/car2.png'
import car3 from '../assets/img/car1/car3.png'
import car4 from '../assets/img/car1/car4.png'
import car5 from '../assets/img/car1/car5.png'
import car6 from '../assets/img/car1/car6.png'
import lada1 from '../assets/img/car2/lada1.jpg'
import lada2 from '../assets/img/car2/lada2.jpg'
import lada3 from '../assets/img/car2/lada3.jpg'
import lada4 from '../assets/img/car2/lada4.jpg'
import lada5 from '../assets/img/car2/lada5.jpg'
import carTest from '../assets/img/image21.png'

function InfoStartPage() {
  const arrImg1 = [car1, car2, car3, car4, car5, car6]
  const arrImg2 = [lada1, lada2, lada3, lada4, lada5]
  const arrsImg = [
    {
      nameModel: 'PORSCHE 911',
      developer: 'l1ha4',
      link: './product',
      arr: arrImg1,
    },
    { nameModel: 'Lada', developer: 'shd', link: './product', arr: arrImg2 },
  ]

  const iconsSelect = [
    { name: 'Clothing', path: clothing, backImg: carTest },
    { name: 'Aircraft', path: aircraft, backImg: carTest },
    { name: 'Vehicles', path: vehicles, backImg: carTest },
    { name: 'Weapon', path: weapon, backImg: carTest },
    { name: 'Industrial', path: industrial, backImg: carTest },
    { name: 'Furniture', path: furniture, backImg: carTest },
  ]

  const postWeek = [
    {
      nameDeveloper: 'ELR',
      grade: 4,
      reviews: '(600 reviews)',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
      imgDeveloper: '',
    },
    {
      nameDeveloper: 'ELR',
      grade: 4,
      reviews: '(600 reviews)',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
      imgDeveloper: '',
    },
    {
      nameDeveloper: 'ELR',
      grade: 4,
      reviews: '(600 reviews)',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
      imgDeveloper: '',
    },
  ]

  const postRecent = [
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
    {
      nameDeveloper: 'l1ha4',
      nameModel: 'Toyota GT86 TRD - 2014',
      img: carTest,
      linkDeveloper: './profile-models',
      linkModel: './product',
    },
  ]

  return (
    <div className="page">
      <MainPreview imageSets={arrsImg} />
      <SelectIcons icon={iconsSelect} />

      <div className="week__block">
        <div className="h1">ARTISTS OF THE WEEK</div>
        <HorListWeek arr={postWeek} />
      </div>

      <div className="recent_block">
        <div className="h1">RECENT MODELS</div>
        <HorListScroll arr={postRecent} />
      </div>

      <InfoArg />
    </div>
  )
}

export default InfoStartPage
