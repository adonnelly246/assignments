import React from "react"
import Navbar from "./Navbar"
import styles from "./styles.module.css"

function Header (){
    return(
        <div className={styles.headerContainer}>
        <Navbar />
            <h1 className={styles.mainHeader}>Clean Blog</h1>
            <h3 className={styles.header}>A Blog Theme by Start Bootstrap</h3>
        </div>
 
    )
}
export default Header