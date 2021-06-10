import React from "react"
import styles from "./styles.module.css"
import App from './App'
function Names (props){
return(
    <div class={styles.parent}>
        
        <div class={styles.row}>
          <h3>  <img class={styles.images} src={props.image} alt={props.name + " image"}/> </h3>
          <h4 class={styles.hitName}>{props.name}</h4>
        </div>

      
      

    </div>
)
}

 export default Names