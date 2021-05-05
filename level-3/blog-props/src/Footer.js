import React from "react"
import styles from "./styles.module.css"

function Footer(){
 return( 
   <div>
        <p className={styles.olderPosts}>Older Posts -</p>
        <div className={styles.footer}>
      <nav className={styles.socials}>social symbols</nav>
      <p className={styles.copywright}>Copyright © Your Website 2021</p>
  </div>
   </div>
      
 )
}

export default Footer