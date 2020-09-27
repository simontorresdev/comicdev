import React from 'react'
import './Styles.module.scss'

export const SingleComic = ({ title, transcript, num, day, month, year, img }) => {
  return (
    <div className='containerComic'>
      <div className='col col1'>
        <img src={img} alt='woodpecker' />
      </div>
      <div className='col col2'>
        <div className='containerDescription'>
          <h1>{title}</h1>
          <div className='containerInformation'>
            <p><span><b>Número:</b></span> {num}</p>
            <p><span><b>Fecha:</b></span> {`${day} - ${month} - ${year}`}</p>
          </div>
          <p>{transcript}</p>
        </div>
      </div>
    </div>
  )
}
