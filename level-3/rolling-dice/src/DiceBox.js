import React from "react"
import App from "./App"
import styles from "./styles.module.css"

function DiceBox(props){
    return(
        <div className={styles.diceBox}>
       <p>{props.nums[0]}</p> 
       <p>{props.nums[1]}</p> 
       <p>{props.nums[2]}</p> 
       <p>{props.nums[3]}</p> 
       <p>{props.nums[4]}</p> 
    </div>
    )
  
}

export default DiceBox