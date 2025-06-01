import React, { useState } from 'react'
import cl from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonContent from '../UI/ButtonContent/ButtonContent'
import Input from '../UI/Input/Input'
import UserModal from './UserModal/UserModal'

function Navbar() {
  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const clickModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className={cl.navbar}>
      <UserModal
        cN={modalIsOpen ? cl.modal_user : cl.block_none}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />

      <ButtonContent cN={cl.navbar__logo} onClick={() => navigate('./')}>
        <img src="../../assets/icons/navbar/arglogo.svg" alt="logo__navbar" />
      </ButtonContent>

      <div className={cl.navbar__search}>
        <Input cN={cl.search__input} placeholder="Search" />
      </div>

      <ButtonContent cN={cl.navbar__filter}>
        <img src="src/assets/icons/navbar/filter 2.svg" />
      </ButtonContent>

      <ButtonContent cN={cl.navbar__shop}>
        <img src="src/assets/icons/navbar/shopping-basket 1.svg" />
      </ButtonContent>

      <ButtonContent cN={cl.navbar__user} onClick={clickModal}>
        <img src="src/assets/icons/navbar/user 3.svg" />
      </ButtonContent>
    </div>
  )
}

export default Navbar
