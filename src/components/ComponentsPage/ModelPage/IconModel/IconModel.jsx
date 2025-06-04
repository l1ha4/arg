import React from 'react'
import cl from './IconModel.module.css'
import img6 from '../../../../assets/img/image6.png'
import img1 from '../../../../assets/img/image1.png'
import arrow2 from '../../../../assets/icons/list-icon/arrow2.svg'
import arrow1 from '../../../../assets/icons/list-icon/arrow1.svg'

function IconModel() {
  return (
    <div>
      <div className={cl.block_tile}>
        <div className={cl.top}></div>
        <img className={cl.img_title} src={img6} />
        <div className={cl.bottom}></div>
      </div>
      <div className={cl.list_img}>
        <div className={cl.but1}>
          <img src={arrow2} alt="" />
        </div>

        <div className={cl.imgs_list}>
          <img className={cl.img} src={img1} alt="" />

          <img className={cl.img} src={img1} alt="" />

          <img className={cl.img} src={img1} alt="" />

          <img className={cl.img} src={img1} alt="" />

          <img className={cl.img} src={img1} alt="" />
        </div>

        <div>
          <img src={arrow1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default IconModel
