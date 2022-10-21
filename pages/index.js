import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Broccoli for the soul</title>
        <meta name="description" content="Broccoli & Co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Broccoli & Co</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
