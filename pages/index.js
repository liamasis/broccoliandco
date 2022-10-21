import Head from 'next/head'
import Trigger from '../components/triggerbutton';
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
import PopForm from '../components/popform.js'
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
        {/*<PopForm triggerText={'well'} onSubmit={onSubmit} />*/}
        <Trigger 
          showModal={true}
          triggerText={'Log in'}
        />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
