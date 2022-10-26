import Head from 'next/head'
import Modal from '../components/Modal';
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.js'
import React, { useState } from 'react';

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Broccoli for the soul</title>
        <meta name="description" content="Broccoli & Co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>A better way to enjoy every day.</h1>
        <button onClick={() => setShowModal(true)}>Join our Mailing List</button>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </Modal>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
