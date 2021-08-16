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
        <div >
            {isEditing === false ?
                <div>
                    <h3 className="title">{props.title}</h3>
                    <img className="image" src={props.imgUrl} alt={props.description} width="400px" maxheight="400px"/>
                    <p className="description"> {props.description} </p>
                
                    <button className="editBtn" onClick={toggleIsEdit}>Edit</button>
                    <button className="deleteBtn" onClick={(e)=>context.handleDelete(e,props._id)}>Delete</button> 
                    <p>------------------------------------------------------------------------</p>
                </div>
            :
                <div className="editForm">
                    <h3 className="edit-title">Edit- "{props.title}"</h3>
                    <Form 
                        id={props._id}
                        title ={props.title}
                        imgUrl = {props.imgUrl}
                        description = {props.description}
                        isEditing = {isEditing}
                        toggleIsEdit = {toggleIsEdit}
                    />
                    <button className="cancelBtn" onClick={toggleIsEdit}> Cancel</button>
                    <p>---------------------------------------------------------------------</p>
                </div>
            }
        </div>
    )
}

export default UglyThing