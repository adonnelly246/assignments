import React from "react"

function Friend(props){
    return(
       <div>
           <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <h3>Pets:</h3>
          <p>{props.pets}</p>
       </div> 
    )

}

export default Friend