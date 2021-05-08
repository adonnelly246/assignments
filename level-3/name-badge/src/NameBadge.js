import React from "react"
import App from "./App"

function NameBadge (props){
return(
    <div>
        <h1>{props.firstName}</h1>
        <p>{props.lastName}</p>
        <p>{props.email}</p>
        <p>{props.birthPlace}</p>
        <p>{props.phone}</p>
        <p>{props.food}</p>

    </div>
)
}

 export default NameBadge