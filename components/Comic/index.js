import React, { useEffect, useState } from 'react'
import { SingleComic } from '../SingleComic'
import { Cargando } from '../Cargando'

export const Comic = () => {
  const [comic, setComic] = useState([])

  useEffect(() => {
    obtenerComic()
  }, [])

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
      }
    }

    const proxiedGet = url => proxiedRequest(url)

    const numeroComic = Math.round(Math.random() * 2364)

    await proxiedGet(`https://xkcd.com/${numeroComic}/info.0.json`)
  }

  return (
    <>
      {comic.title ? <SingleComic {...comic} /> : <Cargando />}
    </>
  )
}
