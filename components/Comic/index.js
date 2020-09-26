import React from 'react'
import { Descripcion } from '../Descripcion'
import './Styles.module.scss'

export const Comic = () => {
  return (
    <div className='containerComic'>
      <div className='col col1'>
        <img src='img/woodpecker.png' alt='woodpecker' />
      </div>
      <div className='col col2'>
        <Descripcion />
      </div>
    </div>
  )
}
