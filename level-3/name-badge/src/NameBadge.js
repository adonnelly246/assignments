import React from "react"
import App from "./App"
import styles from "./styles.module.css"

function NameBadge (props){
return(
    <div class={styles.badgeContainer}>
        <h2 class={styles.badgeHeader}>Badge: </h2>
        <div class={styles.left}>
        <p>Name: {props.firstName} {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Place of Birth: {props.birthPlace}</p>
        </div>
        <div class={styles.right}>
        <p>Phone: {props.phone}</p>
        <p>Favorite food: {props.food}</p>
        </div>
       
        <div class={styles.about}>{props.about}</div>

    </div>
)
}

 export default NameBadge