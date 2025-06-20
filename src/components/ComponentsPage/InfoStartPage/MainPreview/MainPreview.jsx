import React, { useEffect, useState } from 'react'
import cl from './MainPreview.module.css'
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import SelectChoice from '../../../UI/SelectChoice/SelectChoice'

function MainPreview({ imageSets, interval = 3000 }) {
  const navigate = useNavigate()

  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadingImage, setFadingImage] = useState(true) // для плавных переходов изображений
  const [sFade, setSFade] = useState(true) // для плавных переходов при смене набора

  const currentImages = imageSets[currentSetIndex].arr || []
  const totalDuration = currentImages.length * interval

  // Меняем картинки внутри набора с плавным эффектом
  useEffect(() => {
    if (currentImages.length === 0) return

    // Начинаем с полной непрозрачности
    setFadingImage(true)

    const timerId = setInterval(() => {
      // Перед сменой картинки делаем ее прозрачной
      setFadingImage(false)

      // После короткой задержки меняем изображение и делаем его видимым
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex + 1 >= currentImages.length) {
            return 0
          }
          return prevIndex + 1
        })
        setFadingImage(true)
      }, 300) // время анимации в миллисекундах

    }, interval)

    return () => clearInterval(timerId)
  }, [currentImages, interval])

  // Автоматически переключаем набор по окончании прогресса
  useEffect(() => {
    if (totalDuration === 0) return

    const timer = setTimeout(() => {
      // Перед сменой набора запускаем эффект исчезновения всего блока
      setSFade(false)

      // После завершения эффекта меняем набор и показываем снова
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev + 1) % imageSets.length)
        setSFade(true)
      }, 500) // время анимации исчезновения/появления

    }, totalDuration)

    return () => clearTimeout(timer)
  }, [totalDuration, currentSetIndex, imageSets.length])

  // При смене набора сбрасываем индекс изображения и запускаем эффект появления блока
  useEffect(() => {
    setCurrentImageIndex(0)
    setFadingImage(true)
    // Запускаем эффект появления блока при смене набора
    setSFade(true)
  }, [currentSetIndex])

  if (currentImages.length === 0) {
    return <div>Нет изображений для показа</div>
  }

  return (
    <div>
      {/* Обертка для всего блока с анимацией исчезновения/появления */}
      <div
        className={cl.block}
        style={{
          opacity: sFade ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {/* Изображение с плавным переходом */}
        <div
          className={`${cl.block_image}`}
          style={{
            backgroundImage: `url(${currentImages[currentImageIndex]})`,
            opacity: fadingImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        ></div>
        <div className={cl.gradient}></div>
        <div className={cl.block_content}>
          <div className={cl.h1}>FEATURED MODEL</div>
          <span className={cl.h2}>{imageSets[currentSetIndex].nameModel}</span>
          <div className={cl.h3}>{imageSets[currentSetIndex].developer}</div>
          {/* <Button onClick={() => navigate(`/product/${id}`)}>Open</Button> */}
          <Button
            cN={cl.button}
            typeStyle="blue"
            onClick={() => navigate(imageSets[currentSetIndex].link)}
          >
            Open
          </Button>
        </div>
      </div>

      <div className={cl.select}>
        <SelectChoice
          duration={totalDuration}
          keyReset={currentSetIndex}
          choice={currentSetIndex}
          setChoice={(index) => {
            // Перед сменой набора запускаем эффект исчезновения блока
            setSFade(false)
            // После завершения эффекта меняем индекс и показываем блок снова
            setTimeout(() => {
              setCurrentSetIndex(index)
              setSFade(true)
            }, 500)
          }}
          lengthChoice={imageSets.length}
        />
      </div>
    </div>
  )
}

export default MainPreview