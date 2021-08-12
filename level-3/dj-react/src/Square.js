import React,{useState} from "react"
import App from "./App"
import styles from "./styles.module.css"

function Square(props){
  
    return(
        
        <div className={styles.squares} style={{backgroundColor: props.backgroundColor}}>
            <p color={props}></p>
                  
        </div>
    )
}


export default Square