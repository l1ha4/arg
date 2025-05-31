import React from 'react'
import cl from './MainPreview.module.css'
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'

function MainPreview() {
  const navigate = useNavigate()

  return (
    <div className={cl.block}>
      <div className={cl.h1}>FEATURED MODEL</div>
      <div className={cl.h2}>PORSCHE 911</div>
      <div className={cl.h3}>by Name</div>
      <div className={cl.button}>
        <Button onClick={() => navigate('/test')}>Open</Button>
      </div>
    </div>
  )
}

export default MainPreview
