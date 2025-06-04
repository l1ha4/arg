import React from 'react'
import cl from './IconModel.module.css'

function IconModel() {
  return (
    <div>
      <div className={cl.block_tile}>
        <div className={cl.top}></div>
        <img className={cl.img_title} src="src/assets/img/image 6.png" alt="" />
        <div className={cl.bottom}></div>
      </div>
      <div className={cl.list_img}>
        <div className={cl.but1}>
          <img src="src/assets/icons/list-icon/arrow 2.svg" alt="" />
        </div>

        <div className={cl.imgs_list}>
          <img className={cl.img} src="src/assets/img/image 1.png" alt="" />

          <img className={cl.img} src="src/assets/img/image 1.png" alt="" />

          <img className={cl.img} src="src/assets/img/image 1.png" alt="" />

          <img className={cl.img} src="src/assets/img/image 1.png" alt="" />

          <img className={cl.img} src="src/assets/img/image 1.png" alt="" />
        </div>

        <div>
          <img src="src/assets/icons/list-icon/arrow 1.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default IconModel
