import React from 'react'
import Form from './Form'
import Images from './ImagesDisplay'
import {ContextConsumer} from './contextClass'

function App(){
    return(
        <div>
            <Form/>
            <ContextConsumer>
            {context=>(
                context.userImages.map(image => <Images image={image} />)

            )}
        </ContextConsumer>
        </div>
    )
}

export default App