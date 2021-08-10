import React from 'react'
import { ContextConsumer } from './contextClass'
import EditForm from './EditForm'

function ImagesDisplay (){
    return (
            <div>
                <ContextConsumer>
                    {
                        ({uglyThings, isEditing})=>{
                            {isEditing === false?
                                <div>
                                    <h3>{image.title}</h3>
                                        <img className="image" src={context.image.imgUrl} alt={context.image.title} width="400px"       maxHeight="400px"/>
                                            <p>{context.image.description}</p>
                                                <button onClick={(e) => context.handleDelete()}>Delete</button>
                                                <button onClick={(e) => context.handleEditButton()}>Edit</button>
                                </div>
                                :
                                <EditForm />
                            }
                        }
                    }
               
        
            
   
        </ContextConsumer>
               
               </div>                     
     )
    
    
}

export default ImagesDisplay