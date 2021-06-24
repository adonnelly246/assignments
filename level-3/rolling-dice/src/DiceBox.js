import React from "react"
import App from "./App"
import styles from "./styles.css"

function DiceBox(props){
    return(
        <div className={styles.diceBox}>
      <div>{props.dice}<img src={props.image}></img></div>  
      
    </div>
    )
  
}

export default DiceBox