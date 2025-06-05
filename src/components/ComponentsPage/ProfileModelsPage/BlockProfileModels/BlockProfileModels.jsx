import React from 'react'
import cl from './BlockProfileModels.module.css'
import ProfileModels from '../ProfileModels/ProfileModels'
import Button from '../../../UI/Button/Button'
import like1 from '../../../../assets/icons/infopage/like1.svg'
import like2 from '../../../../assets/icons/infopage/like2.svg'
import chat from '../../../../assets/icons/chat.svg'
import flag from '../../../../assets/icons/flag.svg'

function BlockProfileModels() {
  return (
    <div className={cl.block}>
      <ProfileModels />
      <div className={cl.text__block}>
        Total Models: <span className={cl.text__selection}>100</span>
      </div>
      <div className={cl.text__block}>
        Models views: <span className={cl.text__selection}>1000</span>
      </div>

      <div className={cl.flex__button}>
        <Button cN={cl.button} typeStyle={'black'}>
          <img className={cl.img__button} src={chat} alt="" />
          Message
        </Button>

        <Button cN={cl.button} typeStyle={'black'}>
          <img className={cl.img__button} src={like2} alt="" />
          Follow
        </Button>

        <Button cN={cl.button} typeStyle={'black'}>
          <img className={cl.img__button} src={chat} alt="" />
          Report 
        </Button>
      </div>
    </div>
  )
}

export default BlockProfileModels
