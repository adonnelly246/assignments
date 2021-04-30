import React from "react"
import colors from "./ColorData"
import styles from "./styles.module.css"

function Square(props){
    return(
        <div className={styles.squares}>
            <p color={props.colors}>Square</p>
                  
        </div>
    )
}


export default Square