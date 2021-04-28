import React from "react"


function Pet(props){
  return(
    <ul>
      <li>Breed: {props.breed}</li>
      <li>Name: {props.name}</li>
    </ul>
  )

}

export default Pet