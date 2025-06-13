import React, { useState } from 'react'
import cl from './AuthReg.module.css'
import ButtonContent from '../UI/ButtonContent/ButtonContent'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

function AuthReg({ cN }) {
  const [stateButForm, setStateButForm] = useState(false)

  const componentReg = () => {
    return (
      <div className={cl.input__block}>
        <Input
          placeholder="Your mail"
          cNBI={cl.input_width}
          title="Email"
          type="email"
        />
        <Input
          placeholder="Think of a password"
          cT="password"
          cNBI={`${cl.input_width} ${cl.input__margin}`}
          title="Password"
        />
        <div className={cl.text_reg}>
          By registering I confirm that I have read and accept the{' '}
          <span className={cl.a}>Terms of Use</span>. For other details, please
          also see our <span className={cl.a}>Privacy Policy</span>.
        </div>
        <Button typeStyle="blue" cN={cl.button__form}>
          Register
        </Button>
      </div>
    )
  }

  const componentAuth = () => {
    return (
      <div className={cl.input__block}>
        <div className={cl.margin_bot}>
          <Input
            placeholder="Email or Username"
            cNBI={cl.input_width}
            title="Username"
            type="email"
          />
          <Input
            placeholder="Enter password"
            cT="password"
            cNBI={`${cl.input_width} ${cl.input__margin}`}
            title="Password"
          />
        </div>

        <Button typeStyle="blue" cN={cl.button__form}>
          Register
        </Button>
      </div>
    )
  }

  return (
    <div className={`${cN} + ${cl.form}`}>
      <div
        className={`${cl.button__active} + ${
          stateButForm ? cl.button__active_right : ''
        }`}
      ></div>
      <div className={cl.flex_button__choice}>
        <ButtonContent
          cN={cl.button__choice}
          onClick={() => {
            if (stateButForm) {
              setStateButForm(false)
            }
          }}
        >
          <span
            className={
              stateButForm
                ? cl.text_button__choice
                : cl.text_button__choice_active
            }
          >
            Log in
          </span>
        </ButtonContent>
        <ButtonContent
          cN={cl.button__choice}
          onClick={() => {
            if (!stateButForm) {
              setStateButForm(true)
            }
          }}
        >
          <span
            className={
              stateButForm
                ? cl.text_button__choice_active
                : cl.text_button__choice
            }
          >
            Register
          </span>{' '}
        </ButtonContent>
      </div>

      {stateButForm ? componentReg() : componentAuth()}
    </div>
  )
}

export default AuthReg
