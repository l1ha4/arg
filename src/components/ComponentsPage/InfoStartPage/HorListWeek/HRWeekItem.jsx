import React from 'react'
import cl from './HorListWeek.module.css'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'
import { useNavigate } from 'react-router-dom'

function HRWeekItem({ item }) {
  const navigate = useNavigate()
  return (
    <ButtonContent
      className={cl.block}
      onClick={() => navigate(item.linkModel)}
    >
      <div className={cl.title}>
        <img className={cl.icon_profile} src={item.imgProfile}></img>
        <div className={cl.title__text}>
          <ButtonContent
            className={cl.title__username}
            onClick={(e) => {
              e.stopPropagation()
              navigate(item.linkDeveloper)
            }}
          >
            {item.nameDeveloper}
          </ButtonContent>
          <span className={cl.title__num}>{item.reviews}</span>
        </div>
      </div>
      <img className={cl.image} src={item.img}></img>
    </ButtonContent>
  )
}

export default HRWeekItem
