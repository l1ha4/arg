import React, { useEffect, useState, useRef } from 'react'
import cl from './MainPreview.module.css'
import Button from '../../../UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import SelectChoice from '../../../UI/SelectChoice/SelectChoice'

function MainPreview({ model, developer, imageSets, interval = 3000 }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImages = imageSets[currentSetIndex] || []
  const totalDuration = currentImages.length * interval

  // Меняем картинку внутри набора
  useEffect(() => {
    if (currentImages.length === 0) return

    const timerId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex + 1 >= currentImages.length) {
          return 0
        }
        return prevIndex + 1
      })
    }, interval)

    return () => clearInterval(timerId)
  }, [currentImages, interval])

  // Автоматически переключаем набор по окончании прогресса
  useEffect(() => {
    if (totalDuration === 0) return

    const timer = setTimeout(() => {
      setCurrentSetIndex((prev) => (prev + 1) % imageSets.length)
    }, totalDuration)

    return () => clearTimeout(timer)
  }, [totalDuration, currentSetIndex, imageSets.length])

  // При смене набора сбрасываем индекс текущего изображения
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [currentSetIndex])

  if (currentImages.length === 0) {
    return <div>Нет изображений для показа</div>
  }

  return (
    <div>
      <div
        className={cl.block}
        style={{
          background: `linear-gradient(60.17deg,rgb(12, 12, 12) 34.464%,rgba(12, 12, 12, 0) 63.673%),url(${currentImages[currentImageIndex]})`,
        }}
      >
        <div className={cl.h1}>FEATURED MODEL</div>
        <div className={cl.h2}>{model}</div>
        <div className={cl.h3}>{developer}</div>
        {/* <Button onClick={() => navigate(`/product/${id}`)}>Open</Button> */}
        <Button
          cN={cl.button}
          typeStyle="blue"
          onClick={() => navigate(`/product`)}
        >
          Open
        </Button>
      </div>

      <div className={cl.select}>
        <SelectChoice
          duration={totalDuration}
          keyReset={currentSetIndex}
          choice={currentSetIndex}
          setChoice={setCurrentSetIndex}
          lengthChoice={imageSets.length}
        />
      </div>
    </div>
  )
}

export default MainPreview
