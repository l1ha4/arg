import React from 'react'
import cl from './MainPreview.module.css'
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import SelectChoice from '../../../UI/SelectChoice/SelectChoice'
import carimg from '../../../../assets/img/carimg.png'

function MainPreview() {
  const navigate = useNavigate()
  const id = 1
  // TODO реализовать в select таймер изображения перелистования картинок и переход на другую модель
  return (
    <div>
      <div
        className={cl.block}
        style={{
          background: `linear-gradient(60.17deg,rgb(12, 12, 12) 34.464%,rgba(12, 12, 12, 0) 63.673%),url(${carimg})`,
        }}
      >
        <div className={cl.h1}>FEATURED MODEL</div>
        <div className={cl.h2}>PORSCHE 911</div>
        <div className={cl.h3}>by Name</div>
        {/* <Button onClick={() => navigate(`/product/${id}`)}>Open</Button> */}
        <Button
          cN={cl.button}
          typeStyle="blue"
          onClick={() => navigate(`/product`)}
        >
          Open
        </Button>
      </div>

      <div className={cl.select}>
        <SelectChoice />
      </div>
    </div>
  )
}

export default MainPreview
