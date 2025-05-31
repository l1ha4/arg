import React from 'react'
import cl from './Navbar.module.css'
import Search from '../UI/Search/Search'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className={cl.block}>
        <img
          src="src/assets/icons/navbar/arg-logo 2.svg"
          alt="test"
          className={cl.logo}
          onClick={() => navigate('./')}
        />
        <div className={cl.search}>
          <Search placeholder="Search" />
        </div>
        <img className={cl.filter} src="src/assets/icons/navbar/filter 2.svg" />
        <img
          className={cl.shop}
          src="src/assets/icons/navbar/shopping-basket 1.svg"
        />
        <img className={cl.user} src="src/assets/icons/navbar/user 3.svg" />
      </div>
    </div>
  )
}

export default Navbar
