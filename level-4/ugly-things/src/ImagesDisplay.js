import React from 'react'
import {ContextConsumer} from './contextClass'

function ImagesDisplay (props){
    return(
        <ContextConsumer>
            {context=>(
                <div>
                    <h3>{context.title}</h3>
                    <img className="image" src={context.image} alt={context.title}/>
                    <p>{context.description}</p>
                </div> 
            )}
        </ContextConsumer>
     
    )
}

export default ImagesDisplay