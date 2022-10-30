import React from "react";
import Burger from "./Burger";
import styles from "../styles/Home.module.css";

function Navbar() {
    return (
        <nav className={styles.navigation}>
            <div id="outer-container">
                <Burger />
            </div>
        </nav>
    );
}

export default Navbar;
