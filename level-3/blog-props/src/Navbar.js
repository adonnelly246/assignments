import React from "react"
import styles from "./styles.module.css"

function Navbar(){
return (
    <div className={styles.navContainer}>
         <nav className={styles.nav1}>Start Bootstrap</nav>
            <ul className={styles.nav2}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Sample Post</li>
            <li className={styles.li}>Contact</li>

            </ul>
    </div>

)
}
export default Navbar