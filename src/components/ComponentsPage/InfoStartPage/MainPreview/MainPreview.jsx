import React from 'react'
import cl from './MainPreview.module.css'
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import SelectChoice from '../../../UI/SelectChoice/SelectChoice'

function MainPreview() {
  const navigate = useNavigate()
  const id = 1

  return (
    <div>
      <div className={cl.block}>
        <div className={cl.h1}>FEATURED MODEL</div>
        <div className={cl.h2}>PORSCHE 911</div>
        <div className={cl.h3}>by Name</div>
        {/* <Button onClick={() => navigate(`/product/${id}`)}>Open</Button> */}
        <Button cN={cl.button} onClick={() => navigate(`/product`)}>
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
