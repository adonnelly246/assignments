import React from 'react'
import App from './App'

function Name(props){
    return(
        <div>
            {props.firstName}
            {props.lastName}
        </div>
    )
}

export default Name