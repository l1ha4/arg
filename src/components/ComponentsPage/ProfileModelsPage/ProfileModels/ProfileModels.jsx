import React from 'react'
import cl from './ProfileModels.module.css'

function ProfileModels() {
  return (
    <div className={cl.profile}>
      <div className={cl.img_profile}></div>
      <div className={cl.flex__profile}>
        <div className={cl.name_profile}>Name</div>
        <div className={cl.num_profile}>(600 reviews)</div>
      </div>
    </div>
  )
}

export default ProfileModels
