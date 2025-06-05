import React from 'react'
import cl from './ProfileDeveloper.module.css'
import ButtonContent from '../ButtonContent/ButtonContent'
import { useNavigate } from 'react-router-dom'

function ProfileDeveloper({name, des}) {
  const navigate = useNavigate()
  // TODO реализовать отображение рейтинга разработчика моделей
  return (
    <div className={cl.profile} onClick={() => navigate('/profile-models')}>
      <div className={cl.img_profile}></div>
      <div className={cl.flex__profile}>
        <div className={cl.name_profile}>{name}</div>
        <div className={cl.num_profile}>{des}</div>
      </div>
    </div>
  )
}

export default ProfileDeveloper
