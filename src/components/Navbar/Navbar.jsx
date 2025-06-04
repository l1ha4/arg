import React, { useState } from 'react'
import cl from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import ButtonContent from '../UI/ButtonContent/ButtonContent'
import Search from '../UI/Search/Search'
import UserModal from './UserModal/UserModal'
import logo from '../../assets/icons/navbar/arglogo.svg'
import filter from '../../assets/icons/navbar/filter.svg'
import shop from '../../assets/icons/navbar/shop.svg'
import user from '../../assets/icons/navbar/user.svg'

function Navbar() {
  const navigate = useNavigate()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const clickModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  // const onTransInInput {
    
  // }

  return (
    <div className={cl.navbar}>
      <UserModal
        cN={modalIsOpen ? cl.modal_user : cl.block_none}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />

      <ButtonContent cN={cl.navbar__logo} onClick={() => navigate('./')}>
        <img src={logo} alt="logo__navbar" />
      </ButtonContent>

      <div className={cl.navbar__search}>
        <Search />
      </div>

      <ButtonContent cN={cl.navbar__filter}>
        <img src={filter} />
      </ButtonContent>

      <ButtonContent cN={cl.navbar__shop} onClick={() => navigate('./shop')}>
        <img src={shop} />
      </ButtonContent>

      <ButtonContent cN={cl.navbar__user} onClick={clickModal}>
        <img src={user} />
      </ButtonContent>
    </div>
  )
}

export default Navbar
