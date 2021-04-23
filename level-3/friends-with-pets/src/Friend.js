import React from "react"
import friends from "./Pet"

function Friend(props){
    return(
       <div>
           <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.pets.breed}</p>
            <p>{props.pets.name}</p>
       </div> 
    )
}

export default Friend