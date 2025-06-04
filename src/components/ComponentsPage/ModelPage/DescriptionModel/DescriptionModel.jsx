import React from 'react'
import cl from './DescriptionModel.module.css'

function DescriptionModel() {
  return (
    <div className={cl.description}>
      <div className={cl.h1}>DESCRIPTION</div>

      <ul className={cl.ul}>
        <li className={cl.li}>detailed exterior and interior,</li>
        <li className={cl.li}>doors can be opened,</li>
        <li className={cl.li}>
          every object has material's name, you can easily change or apply
          materials,
        </li>
      </ul>

      <div>
        <div>
          Polycount: without meshsmooth max,obj,lwo,xsi,c4d: 880 000 polygons
        </div>
        <div>collapsed fbx,3ds,obj: 9 200 000 faces/ 5 400 000 polygons</div>
      </div>
    </div>
  )
}

export default DescriptionModel
