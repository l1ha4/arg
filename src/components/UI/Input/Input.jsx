import React, { useState } from 'react'
import cl from './Input.module.css'
import ButtonContent from '../ButtonContent/ButtonContent'
import eyeh from '../../../assets/icons/eye/eyeh.svg'
import eyeo from '../../../assets/icons/eye/eyeo.svg'

function Input({ cNBI, cN, cT, title, ...props }) {
  const [stateButEye, setStateButEye] = useState(false)

  const inputPassword = () => {
    return (
      <div className={cl.block__password}>
        <input
          className={`${cl.input__password} ${cN} ${cl.input}  `}
          type={stateButEye ? 'password' : 'text'}
          {...props}
        />
        <ButtonContent
          onClick={() => setStateButEye(!stateButEye)}
          cN={cl.img__password}
        >
          <img src={stateButEye ? eyeh : eyeo} alt="" />
        </ButtonContent>
      </div>
    )
  }

  const inputStandard = () => {
    return (
      <input className={`${cN} ${cl.input}`} autoComplete="none" {...props} />
    )
  }

  const comTitle = () => {
    return <div className={cl.title}>{title}</div>
  }

  return (
    <div className={cNBI}>
      {title ? comTitle() : ''}
      {cT === 'password' ? inputPassword() : inputStandard()}
    </div>
  )
}
// значение data: ntp - обычное поле, tph - тип пароля скрытый, tpo - тип пароля открытый
export default Input
