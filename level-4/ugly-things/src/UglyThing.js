import react, {useContext, useState} from 'react'
import {ContextClass} from './contextClass'
import Form from "./Form"

function UglyThing (props){
    const context = useContext(ContextClass)
    const [isEditing, setIsEditing] =useState(false)
    
    const toggleIsEdit = () => {
        setIsEditing(prev => !prev)
    }


    return(
        <div>
            {isEditing === false ?
                <div>
                    <h3>{props.title}</h3>
                    <img className="image" src={props.imgUrl} alt={props.description} width="400px" maxheight="400px"/>
                    <p>{props.description}</p>
                
                    <button onClick={toggleIsEdit}>Edit</button>
                    <button onClick={(e)=>context.handleDelete(e,props._id)}>Delete</button> 
                    
                </div>
            :
                <div>
                    <h3>Edit</h3>
                    <Form 
                        id={props._id}
                        title ={props.title}
                        imgUrl = {props.imgUrl}
                        description = {props.description}
                        isEditing = {isEditing}
                        toggleIsEdit = {toggleIsEdit}

                    />
                    <button onClick={toggleIsEdit}> Cancel</button>
                </div>
            }
        </div>
    )
}

export default UglyThing