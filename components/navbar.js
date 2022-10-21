import React from 'react';
import Link from 'next/Link';
import { slide as Menu } from 'react-burger-menu';

import styles from '../styles/Home.module.css'
function Navbar() { 
  return (
    <nav className={styles.navigation}>
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap">
            <h1>Logo</h1>
          </main>
      </div>
    </nav>
  );
}



export default Navbar