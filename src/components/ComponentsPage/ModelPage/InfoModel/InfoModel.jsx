import React, { useState } from 'react'
import cl from './InfoModel.module.css'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'
import Hr from '../../../UI/Hr/Hr'
import shop from '../../../../assets/icons/infopage/shoppingcart.svg'
import like2 from '../../../../assets/icons/infopage/like2.svg'
import like1 from '../../../../assets/icons/infopage/like1.svg'

function InfoModel() {
  const [stateLike, setStateLike] = useState(false)
  return (
    <div className={cl.block}>
      <div className={cl.h1}>Porsche 911 GT3 RS 992</div>
      <div className={cl.h2}>Standard Use License (No Commercial)</div>
      <div className={cl.h3}>$104.30</div>
      <div className={cl.flex}>
        <div className={cl.h4}>$149.00</div>
        <div className={cl.sell}>-30%</div>
      </div>

      <div className={cl.flex_between}>
        <ButtonContent cN={cl.button_shop}>
          <div className={cl.flex_center}>
            <img className={cl.svg_shop} src={shop} />
            Add to cart
          </div>
        </ButtonContent>

        <ButtonContent
          cN={stateLike ? cl.button_like_active : cl.button_like}
          onClick={() => setStateLike(!stateLike)}
        >
          <img className={cl.svg_like} src={stateLike ? like1 : like2} />
        </ButtonContent>
      </div>

      <div className={cl.format}>
        <div className={cl.h1}>Included formats</div>
        <div className={cl.flex_format}>
          <div className={cl.item}>fbx</div>
          <div className={cl.item}>c4d</div>
          <div className={cl.item}>obj</div>
          <div className={cl.item}>...</div>
        </div>
      </div>

      <div className={cl.tag}>
        <div className={cl.h1}>Tags</div>

        <div className={cl.flex_tag}>
          <div className={cl.item + ' ' + cl.item_tag}>3D Modeling</div>
          <div className={cl.item + ' ' + cl.item_tag}>Lighting</div>
          <div className={cl.item + ' ' + cl.item_tag}>Low-poly Modeling</div>
          <div className={cl.item + ' ' + cl.item_tag}>Rendering</div>
          <div className={cl.item + ' ' + cl.item_tag}>Rigging</div>
          <div className={cl.item + ' ' + cl.item_tag}>Texturing</div>
          <div className={cl.item + ' ' + cl.item_tag}>UV mapping</div>
        </div>
      </div>

      <Hr />

      <div className={cl.profile}>
        <div className={cl.img_profile}></div>
        <div className={cl.flex__profile}>
          <div className={cl.name_profile}>Name</div>
          <div className={cl.num_profile}>(600 reviews)</div>
        </div>
      </div>
    </div>
  )
}

export default InfoModel
