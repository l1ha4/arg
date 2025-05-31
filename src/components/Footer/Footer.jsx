import React from 'react'
import cl from './Footer.module.css'

function Footer() {
  return (
    <div className={cl.footer}>
      <div>
        <div className={cl.info}>
          © 2024 ARG. All rights reserved. ARG and the ARG logo are trademarks
          or registered trademarks of ARG, in the USA and elsewhere. All other
          trademarks are the property of their respective owners.
        </div>
        <div className={cl.list_button}>
          <div className={cl.button}>About Us</div>
          <div className={cl.button}>Support</div>
          <div className={cl.button}>Privacy Policy</div>
          <div className={cl.button}>Terms of Services</div>
          <div className={cl.button}>Cookies Settings</div>
        </div>
      </div>

      <div className={cl.imgs}>
        <img
          className={cl.visa}
          src="src\assets\icons\footer\visa.svg"
          alt=""
        />
        <img
          className={cl.mastercard}
          src="src\assets\icons\footer\mastercard.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Footer
