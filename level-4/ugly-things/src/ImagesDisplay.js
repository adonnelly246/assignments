import React from 'react'


function ImagesDisplay (props){
    return(
        <div>
            <h3>{props.image.title}</h3>
            <img className="image" src={props.image.image} alt={props.image.title} width="600px" height="550px"/>
            <p>{props.image.description}</p>
        </div> 
     
    )
}

export default ImagesDisplay