import React from 'react'
import { Batman, Flash } from '../../icons'
import './Styles.module.scss'

export const Cargando = () => {
  return (
    <div className='containerCargando'>
      <Batman />
      <Flash />
      <div className='lds-ellipsis'><div /><div /><div /><div /></div>
    </div>
  )
}
