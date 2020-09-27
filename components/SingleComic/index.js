import React from 'react'
import './Styles.module.scss'
import StarsRating from 'stars-rating'

export const SingleComic = ({ title, transcript, num, day, month, year, img, alt }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
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
            <p><span><b>Fecha:</b></span> {`${day} - ${month} - ${year}`}</p>
          </div>
          <p>{transcript}</p>
          <h3>Calificar Comic</h3>
          <StarsRating
            count={5}
            onChange={ratingChanged}
            size={35}
            color2='#ffd700'
            className='stars-rating'
          />
          <a href='/' className='boton'>Ver otro Comic</a>
        </div>
      </div>
    </div>
  )
}
