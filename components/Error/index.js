import React from 'react'
import './Styles.module.scss'

export const Error = () => {
  return (
    <div className='containerError'>
      <img src='img/flash.png' alt='Error Flash' className='errorFlash' />
      <img src='img/batman.png' alt='Error Batman' className='errorBatman' />
      <h2>Ha ocurrido un error</h2>
      <a href='/' className='boton'>Volver a intertarlo</a>
    </div>
  )
}
