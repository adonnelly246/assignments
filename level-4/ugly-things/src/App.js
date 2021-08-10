import React from 'react'
import Form from './Form'
import {ContextConsumer} from './contextClass'
import ImagesDisplay from './ListDisplay'
import ListDisplay from './ListDisplay'

function App(){
    return(
        <div>
            <h1>Ugly Things</h1>
            <h4>Add New</h4>
            <Form/>
            <ListDisplay />
    
        </div>
    )
}

export default App