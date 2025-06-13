import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/stylePage/SettingPage.css'
import ProfileDeveloper from '../components/UI/ProfileDeveloper/ProfileDeveloper'
import ButtonContent from '../components/UI/ButtonContent/ButtonContent'
import UserImg from '../assets/icons/settingspage/UserImg'
import EmailImg from '../assets/icons/settingspage/EmailImg'
import LockImg from '../assets/icons/settingspage/LockImg'
import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'
import { useLocation, useNavigate } from 'react-router-dom'

function SettingsPage() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('profile')

  const profilePage = () => {
    return (
      <div>
        <div className="settings__page_title">Profile</div>
        <div className="settings__profile_img_flex">
          <div className="settings__profile_img"></div>
          <div className="settings__profile_img_flex_column">
            <Button typeStyle="blue" cN="settings__profile_img_button">
              Upload new picture
            </Button>
            <div className="settings__profile_text">JPG or PNG and 1MB max</div>
          </div>
        </div>

        <div className="settings__profile_input">
          <Input style={{ backgroundColor: '#0C0C0C' }} title="Display Name" />
        </div>

        <div className="settings__profile_input_flex">
          <Input
            style={{ backgroundColor: '#0C0C0C' }}
            cNBI="settings__profile_input_input"
            title="Username"
          />
          <Button typeStyle="blue" cN="settings__profile_input_button">
            Edit
          </Button>
        </div>
      </div>
    )
  }

  const emailPage = () => {
    return (
      <div>
        <div className="settings__page_title">Email</div>
        <div className="settings__profile_input">
          <Input style={{ backgroundColor: '#0C0C0C' }} title="Email address" />
        </div>

        <div className="settings__profile_input">
          <Input style={{ backgroundColor: '#0C0C0C' }} title="Password" />
        </div>

        <Button typeStyle="blue" cN="settings__profile_input_button">
          Save Email
        </Button>
      </div>
    )
  }

  const securityPage = () => {
    return (
      <div>
        <div className="settings__page_title">Security</div>
        <div className="settings__profile_input">
          <Input style={{ backgroundColor: '#0C0C0C' }} title="Old password" />
        </div>

        <div className="settings__profile_input">
          <Input style={{ backgroundColor: '#0C0C0C' }} title="New password" />
        </div>

        <div className="settings__profile_input">
          <Input
            style={{ backgroundColor: '#0C0C0C' }}
            title="Confirm new password"
          />
        </div>

        <Button typeStyle="blue" cN="settings__profile_input_button">
          Save changes
        </Button>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="settings__block__flex">
        <div className="settings__block__profile">
          <ProfileDeveloper name="User Name N465" des="@username465" />

          <div className="settings__flex_items">
            <ButtonContent
              cN={`settings__item ${
                location === 'profile' ? 'settings__item_active' : ''
              }`}
              onClick={() => setLocation('profile')}
            >
              <UserImg cN="settings__item_icon" />{' '}
              <div className="settings__item_text">Profile</div>
            </ButtonContent>

            <ButtonContent
              cN={`settings__item ${
                location === 'email' ? 'settings__item_active' : ''
              }`}
              onClick={() => setLocation('email')}
            >
              <EmailImg cN="settings__item_icon" />{' '}
              <div className="settings__item_text">Email</div>
            </ButtonContent>

            <ButtonContent
              cN={`settings__item ${
                location === 'security' ? 'settings__item_active' : ''
              }`}
              onClick={() => setLocation('security')}
            >
              <LockImg cN="settings__item_icon" />{' '}
              <div className="settings__item_text">Security</div>
            </ButtonContent>
          </div>
        </div>

        <div className="settings__page">
          {location === 'profile' ? profilePage() : ''}
          {location === 'email' ? emailPage() : ''}
          {location === 'security' ? securityPage() : ''}
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
