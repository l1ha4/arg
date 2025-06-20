import React from 'react'
import cl from './HorListScroll.module.css'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'
import { useNavigate } from 'react-router-dom'

function HLScrollItem({ item }) {
  const navigate = useNavigate()
  return (
    <ButtonContent
      className={cl.block}
      onClick={() => navigate(item.linkModel)}
    >
      <img className={cl.icon} src={item.img}></img>
      <div className={cl.title}>
        <div className={cl.model}>{item.nameModel}</div>
        <ButtonContent
          cN={cl.name}
          onClick={(e) => {
            e.stopPropagation()
            navigate(item.linkDeveloper)
          }}
        >
          {item.nameDeveloper}
        </ButtonContent>
      </div>
    </ButtonContent>
  )
}

export default HLScrollItem
