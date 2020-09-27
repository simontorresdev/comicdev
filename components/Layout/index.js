import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Logo, Flash, Batman } from '../../icons'
import './Styles.module.scss'

export const Layout = (props) => {
  const [theme, setTheme] = useState('')

  function cambiarTema () {
    // Agregamos la clase dark al body para cambiar todos los estilos
    document.body.classList.toggle('dark')

    // Si la el body no tiene la clase dark quiere decir que el tema es el light, y si contiene la clase dark es el tema oscuro
    if (document.body.classList.contains('dark')) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    // Guardamos el tema actual en el local storage dependiendo del estado actual
    theme === 'dark' ? localStorage.setItem('dark-mode', 'true') : ''
    theme === 'light' ? localStorage.setItem('dark-mode', 'false') : ''

    // Detectamos la información almacenada en localstorage para agregar o eliminar la clase dark
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  return (
    <>
      <Head>
        <title>Comic dev</title>
        <link href='https://fonts.googleapis.com/css2?family=Anton&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap' rel='stylesheet' />
      </Head>

      <header className='containerHeader'>
        <div className='column1'>
          <Logo />
        </div>
        <div className='column2'>
          <div className='ModoActual'>
            <p className='modoFlash typeTitle'>Modo Flash</p>
            <p className='modoBatman typeTitle'>Modo Batman</p>
          </div>
          <button className='switch' id='switch' onClick={cambiarTema}>
            <span><Batman /></span>
            <span><Flash /></span>
          </button>
        </div>
      </header>

      <main>
        {props.children}
      </main>

      <footer className='containerFooter'>
        <h3>Elaborardo por <a href='http://simontorres.dev/' target='_blanck'>@simontorresdev</a></h3>
      </footer>
    </>
  )
}
