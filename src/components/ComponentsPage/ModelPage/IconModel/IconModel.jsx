import React, { useRef } from 'react'
import cl from './IconModel.module.css'
import img6 from '../../../../assets/img/image6.png'
import img1 from '../../../../assets/img/image1.png'
import arrow2 from '../../../../assets/icons/list-icon/arrow2.svg'
import arrow1 from '../../../../assets/icons/list-icon/arrow1.svg'
import ButtonContent from '../../../UI/ButtonContent/ButtonContent'

function IconModel({ imgs }) {
  /*
    TODO добавить функционал:
    * - сделать скролл скриншотов модели по кнопкам
    * - сделать скролл скриншотов модели по мыши
    * - сделать выбор и отображение основной картинки
    * - сделать анимацию выбора картинки
    */

  const scrollRef = useRef(null)
  const mainImg = useRef(null)

  const scrollByOffset = (offset) => {
    if (scrollRef.current) {
      // Прокрутить на offset пикселей вправо (если offset отрицательный — влево)
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const changeMainImg = (e) => {
    mainImg.current.src = (imgs.arr[e])
  }

  return (
    <div>
      <div className={cl.block_tile}>
        <div className={cl.top}></div>
        <img className={cl.img_title} src={imgs.arr[0]} ref={mainImg}/>
        <div className={cl.bottom}></div>
      </div>
      <div className={cl.list_img}>
        <ButtonContent className={cl.but1} onClick={() => scrollByOffset(-237)}>
          <img src={arrow2} alt="" />
        </ButtonContent>

        <div className={cl.imgs_list} ref={scrollRef}>
          {imgs.arr.map((item, index) => (
            <ButtonContent cN={cl.buttonImg} onClick={() => changeMainImg(index)}>
              <img
                className={cl.img}
                src={item}
                key={index + 'IconModel'}
                alt=""
              />
            </ButtonContent>
          ))}
        </div>

        <ButtonContent onClick={() => scrollByOffset(237)}>
          <img src={arrow1} alt="" />
        </ButtonContent>
      </div>
    </div>
  )
}

export default IconModel
