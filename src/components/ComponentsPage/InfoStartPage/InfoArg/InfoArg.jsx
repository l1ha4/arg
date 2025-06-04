import React from 'react'
import cl from './InfoArg.module.css'
import arg from '../../../../assets/img/arg.png'

function InfoArg() {
  return (
    <div className={cl.block_main}>
      <div className={cl.block_text}>
        <div className={cl.title}>WHAT IS ARG?</div>

        <div className={cl.text_1}>
          <div className={cl.text}>
            ARG is a professional digital marketplace focused on high-quality 3D
            models tailored for game development
          </div>
          <div className={cl.text}>
            animation, visualization, and 3D printing. Designed for both
            creators and studios, ARG provides a robust
          </div>
          <div className={cl.text}>
            and scalable platform where efficiency, precision, and content
            integrity are top priorities.
          </div>
        </div>

        <div className={cl.text_2}>
          <div className={cl.text}>
            More than just a catalog of models, ARG is a curated environment for
            3D artists
          </div>
          <div className={cl.text}>
            and professionals. It combines ease of use with powerful tools for
            managing
          </div>
          <div className={cl.text}>
            purchases, licenses, and portfolio visibility.
          </div>
          <div className={cl.text}>
            Whether you're building the next AAA title or a mobile indie
            project, ARG is
          </div>
        </div>

        <div className={cl.text_3}>
          <div className={cl.text}>
            Every asset listed on ARG undergoes a strict validation process to
            ensure{' '}
          </div>
          <div className={cl.text}>
            it meets industry standards — whether it's for real-time engines,
            cinematic{' '}
          </div>
          <div className={cl.text}>
            projects, or prototyping. With support for widely-used formats like
            FBX, OBJ,{' '}
          </div>
          <div className={cl.text}>
            and STL, integration into any pipeline is seamless and intuitive.
          </div>
        </div>
      </div>

      <img className={cl.img} src={arg}/>
    </div>
  )
}

export default InfoArg
