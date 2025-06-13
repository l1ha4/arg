import React from 'react'
import UserModal from '../components/Navbar/UserModal/UserModal'
import AuthReg from '../components/AuthReg/AuthReg'
import '../styles/stylePage/DevPage.css'

function DevPage() {
  return (
    <div className="page page__dev">
      <AuthReg/>
    </div>
  )
}

export default DevPage
