import React from 'react';
import Link from 'next/Link';
import { slide as Menu } from 'react-burger-menu';

import styles from '../styles/Home.module.css'
function Navbar() { 
  return (
    <nav className={styles.navigation}>
        <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        </Menu>
        <button className="burgerMenu">Menu</button>
    </nav>
  );
}



export default Navbar