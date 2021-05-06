import React from "react"
import App from "./App"
import styles from "./styles.module.css"

function DiceBox(props){
    <div className={styles.diceBox}>
        {props.num1}
        {props.num2}
        {props.num3}
        {props.num4}
        {props.num5}
    </div>
}

export default DiceBox