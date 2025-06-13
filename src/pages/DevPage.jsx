import React from 'react'
import UserModal from '../components/Navbar/UserModal/UserModal'
import AuthReg from '../components/AuthReg/AuthReg'
import '../styles/stylePage/DevPage.css'
import ModalBool from '../components/UI/ModalBool/ModalBool'
import ModalMessage from '../components/UI/ModalMessage/ModalMessage'

function DevPage() {
  return (
    <div className="page__dev page">
      <AuthReg/>
      <div className='page_dev_element'><ModalBool/></div>
      <div className='page_dev_element'><ModalMessage/></div>
    </div>
  )
}

export default DevPage
