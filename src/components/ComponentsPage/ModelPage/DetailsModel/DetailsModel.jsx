import React from 'react'
import Hr from '../../../UI/Hr/Hr'
import cl from './DetailsModel.module.css'

function DetailsModel() {
  return (
    <div className={cl.details}>
      <div className={cl.h1}>Details</div>

      <Hr />

      <div className={cl.flex_detail}>
        <div className={cl.detail}>
          <div className={cl.par_details}>Low-poly</div> <div>Yes</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Polygons</div> <div>880,000</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Vertices</div> <div>880,000</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Textures</div> <div>Yes</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Materials</div> <div>Yes</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>UV Mapping</div> <div>No</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Publish date</div>
          <div>30.09.2022</div>
        </div>

        <div className={cl.detail}>
          <div className={cl.par_details}>Model ID</div> <div>5728932</div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModel
