import React from 'react'
import cl from './Footer.module.css'
import visa from '../../assets/icons/footer/visa.svg'
import mastercard from '../../assets/icons/footer/mastercard.svg'
import ButtonContent from '../UI/ButtonContent/ButtonContent'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <div className={cl.footer}>
      <div>
        <div className={cl.info}>
          © 2024 ARG. All rights reserved. ARG and the ARG logo are trademarks
          or registered trademarks of ARG, in the USA and elsewhere. All other
          trademarks are the property of their respective owners.
        </div>
        <div className={cl.list_button}>
          <ButtonContent cN={cl.button}>About Us</ButtonContent>
          <ButtonContent cN={cl.button}>Support</ButtonContent>
          <ButtonContent cN={cl.button}>Privacy Policy</ButtonContent>
          <ButtonContent cN={cl.button}>Terms of Services</ButtonContent>
          <ButtonContent cN={cl.button}>Cookies Settings</ButtonContent>
          <ButtonContent onClick={() => navigate('./dev')} cN={cl.button}>Component development</ButtonContent>
        </div>
      </div>

      <div className={cl.imgs}>
        <img
          className={cl.visa}
          src={visa}
          alt=""
        />
        <img
          className={cl.mastercard}
          src={mastercard}
          alt=""
        />
      </div>
    </div>
  )
}

export default Footer
