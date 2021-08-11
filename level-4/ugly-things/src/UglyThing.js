import react, {useContext, useState} from 'react'
import {ContextClass} from './contextClass'
import Form from "./Form"
function UglyThing (props){
    const context = useContext(ContextClass)
    const [isEditing, setIsEditing] =useState(false)


    return(
        <div>
            {isEditing === false ?
                <div>
                    <h3>{props.item.title}</h3>
                    <img className="image" src={props.item.imgUrl} alt={props.item.description} width="400px" maxHeight="400px"/>
                    <p>{props.item.description}</p>
                
                    <button onClick={()=>context.handleEdit(props._id)}>{isEditing ? "Cancel" : "Edit"}</button>
                    <button onClick={()=>context.handleDelete(props._id)}>Delete</button> 
                    {/* get _id from data */}
                </div>
            :
                <div>
                    <h3>Edit</h3>
                    <Form 
                        id={props.id}
                        title ={props.title}
                        imgUrl = {props.imgUrl}
                        decription = {props.description}
                        isEditing = {isEditing}

                    />
                </div>
            }
        </div>
    )
}

export default UglyThing