import React from 'react'
import { Descripcion } from '../Descripcion'
import './Styles.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const Comic = () => {
  return (
    <div className='containerComic'>
      <div className='col col1'>
        <img src='img/woodpecker.png' alt='woodpecker' />
      </div>
      <div className='col col2'>

        <Tabs>
          <TabPanel>
            <Descripcion />
          </TabPanel>
          <TabPanel>
            <h2>Califica el comic</h2>
          </TabPanel>

          <TabList>
            <Tab>Volver a la descripción</Tab>
            <Tab>Calificar el comic</Tab>
          </TabList>
        </Tabs>

      </div>
    </div>
  )
}
