import React, { useState } from 'react'
import './Styles.module.scss'
import StarsRating from 'stars-rating'

export const SingleComic = ({ title, transcript, num, day, month, year, img, alt }) => {
  const [puntaje, setPuntaje] = useState(0)

  // AL PRESIONAR UNA ESTRELLA actualizamos EL ESTADO PUNTAJE PARA QUE ESTE SE MUESTRE AL USUARIO
  const ratingChanged = (newRating) => {
    setPuntaje(newRating)
  }

  return (
    <div className='containerComic'>
      <div className='col col1'>
        <img src={img} alt={alt} />
      </div>
      <div className='col col2'>
        <div className='containerDescription'>

          <h1>{title}</h1>

          <div className='containerInformation'>
            <p><span><b>Número:</b></span> {num}</p>
            <p><span><b>Fecha:</b></span> {`${day}-${month}-${year}`}</p>
          </div>

          <p>{transcript}</p>

          <h3>Calificar Comic</h3>

          {puntaje === 0 &&
            <StarsRating
              count={5}
              onChange={ratingChanged}
              size={35}
              color2='#ffd700'
              className='stars-rating'
            />}

          {puntaje > 0 &&
            <p className='clasificacion'>Has clasificado el comic con {puntaje} estrellas. Muchas gracias.</p>}

          <a href='/' className='boton'>Ver otro Comic</a>
        </div>
      </div>
    </div>
  )
}
