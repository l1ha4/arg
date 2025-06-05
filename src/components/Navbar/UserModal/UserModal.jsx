import React, { useState } from 'react'
import cl from './UserModal.module.css'
import FavoritesSvg from '../../../assets/icons/modalWindow/FavoritesSvg'
import PurchasesSvg from '../../../assets/icons/modalWindow/PurchasesSvg'
import SettingsSvg from '../../../assets/icons/modalWindow/SettingsSvg'
import LogOutSvg from '../../../assets/icons/modalWindow/LogOutSvg'
import ButtonContent from '../../UI/ButtonContent/ButtonContent'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'

function UserModal({ funClick, cN, ...props }) {
  const navigate = useNavigate()

  return (
    <div className={`${cl.block} ${cN}`}>
      <ButtonContent cN={cl.flex} onClick={() => navigate('./profile-models')}>
        <div className={cl.img_profile}></div>
        <div className={cl.info_profile}>
          <div className={cl.info__name}>User Name N465</div>
          <div className={cl.info__id}>@username465</div>
        </div>
      </ButtonContent>

      <div className={cl.ul}>
        <ButtonContent className={cl.li} onClick={() => navigate('./favorites')}>
          <FavoritesSvg className={cl.li__icon} />
          <div className={cl.li__text}>Favorites</div>
        </ButtonContent>

        <ButtonContent
          className={cl.li}
          onClick={() => navigate('./purchases')}
        >
          <PurchasesSvg className={cl.li__icon} />
          <div className={cl.li__text}>Purchases</div>
        </ButtonContent>

        <ButtonContent className={cl.li}>
          <SettingsSvg className={cl.li__icon} />
          <div className={cl.li__text}>Settings</div>
        </ButtonContent>

        <ButtonContent className={cl.li_red}>
          <LogOutSvg className={cl.li__icon_red} />
          <div className={cl.li__text_red}>Log out</div>
        </ButtonContent>
      </div>
    </div>
  )
}

export default UserModal
