import React from "react"
import Pet from "./Pet"
function Friend(props){
    const petsOnly = props.pets.map(pet => {
        return( 
        < Pet key= {pet.id}
          name = { pet.name}
         breed = {pet.breed}/>  
        )
     })
    
    return(
        
       <div>
           <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <h3>Pets:</h3>
          <div>{petsOnly}</div>
       </div> 
    )

}

export default Friend