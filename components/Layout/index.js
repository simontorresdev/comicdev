import React from 'react'
import Head from 'next/head'
import Logo from '../../icons/Logo'
import styles from './styles.module.scss'

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Comic dev</title>
      </Head>
      <header className={styles.header}>
        <div>
          <Logo />
        </div>
        <div>
          <p>Light</p>
        </div>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}
