import React, { useEffect, useState } from 'react'
import cl from './Navbar.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonContent from '../UI/ButtonContent/ButtonContent'
import Search from '../UI/Search/Search'
import UserModal from './UserModal/UserModal'
import logo from '../../assets/icons/navbar/arglogo.svg'
import filter from '../../assets/icons/navbar/filter.svg'
import shop from '../../assets/icons/navbar/shop.svg'
import user from '../../assets/icons/navbar/user.svg'
import SearchBlock from './SearchBlock/SearchBlock'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [stateFilter, setStateFilter] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const clickModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const onTransInInput = (e) => {
    if (e.key === 'Enter') {
      navigate('./search')
      setStateFilter(true)
    }
  }

  const onClickFilter = () => {
    console.log(location)
    if(location.pathname === '/search') {
      setStateFilter(!stateFilter)
    } else {
      setStateFilter(false)
    }
  }



  return (
    <div className={cl.navbar_flex}>
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
          <Search onKeyPress={onTransInInput} />
        </div>

        <ButtonContent cN={cl.navbar__filter } onClick={() => onClickFilter()} >
          <img src={filter} />
        </ButtonContent>

        <ButtonContent cN={cl.navbar__shop} onClick={() => navigate('./shop')}>
          <img src={shop} />
        </ButtonContent>

        <ButtonContent cN={cl.navbar__user} onClick={clickModal}>
          <img src={user} />
        </ButtonContent>
      </div>

      {stateFilter ? <SearchBlock /> : ''}
    </div>
  )
}

export default Navbar
