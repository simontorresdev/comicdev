import React, { useEffect, useState } from 'react'
import { SingleComic } from '../SingleComic'
import { Cargando } from '../Cargando'
import { Error } from '../Error'

export const Comic = () => {
  // DEFINIMOS EL ESTADO COMIC
  const [comic, setComic] = useState([])
  const [error, setError] = useState(false)

  // LUEGO DE RENDERIZAR EL COMPONENTE INVOCAMOS UNA FUNCIÓN QUE ACTUALIZARA EL ESTADO LUEGO DE OBTENER LOS DATOS DE LA API

  useEffect(() => {
    obtenerComic()
  }, [])

  // FUNCION PARA ACTUALIZAR EL ESTADO LUEGO DE CONSUMIR LA API

  const obtenerComic = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com'

    const proxiedRequest = async (url, options = {}) => {
      try {
        const req = await fetch(`${proxyUrl}/${url}`, {
          ...options,
          headers: {
            ...options.headers,
            'X-Requested-With': 'wololo'
          }
        })
        const data = await req.json()
        setComic(data)
      } catch (e) {
        setError(true)
      }
    }

    const proxiedGet = url => proxiedRequest(url)

    const numeroComic = Math.round(Math.random() * 2364)

    await proxiedGet(`https://xkcd.com/${numeroComic}/info.0.json`)
  }

  return (
    <>
      {comic.title ? <SingleComic {...comic} /> : (error) ? <Error /> : <Cargando />}
    </>
  )
}
