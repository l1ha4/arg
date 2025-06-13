import React, { useState } from 'react'
import Input from '../Input/Input'
import cl from './ModalMessage.module.css'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'

function ModalMessage() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className={cl.block}>
      <div className={cl.h1}>Message</div>

      <div className={cl.input_block}>
        <div className={cl.h2}>Subject</div>
        <Input
          style={{ backgroundColor: '#0C0C0C' }}
          value={subject}
          placeholder="Type here"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className={cl.input_block}>
        <div className={cl.h2}>Message</div>
        <TextArea
          value={message}
          placeholder="Type here"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={cl.button_block}>
        <Button cN={`${cl.button } ${cl.blue}`} typeStyle='blue'>Send message</Button>
        <Button cN={`${cl.button}  ${cl.black}`} typeStyle='black'>Cancel</Button>
      </div>
    </div>
  )
}

export default ModalMessage
