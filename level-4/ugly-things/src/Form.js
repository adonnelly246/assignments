import React, {useContext, useState} from 'react'
import {ContextClass}  from './contextClass'


function Form(props){

    const uglyContext = useContext(ContextClass)
        
    const initState = {
        imgUrl: props.imgUrl ? props.imgUrl : "",
        title: props.title ? props.title : "",
        description:props.description ? props.description : ""
    }
    
    const [imageInfo, setImageInfo] = useState(initState)
    
    const handleChange = (event) =>{
        const {name, value} = event.target
        
        setImageInfo(prevInfo =>({
            ...prevInfo,
            [name]: value   
        }))
    }

    const onSubmitForm = (e) => {
        if(props && props.isEditing === true){
            console.log(props.id)
            uglyContext.handleEdit(e, props.id, imageInfo)
            return props.toggleIsEdit()
        }
        else{
            uglyContext.handleSubmit(e, imageInfo)
            }
            return setImageInfo(initState)
    }

    return(
            <div>
                 <form onSubmit = {onSubmitForm}>
                     <input 
                        type="text" 
                        placeholder="Image URL"
                        name="imgUrl"
                        value={imageInfo.imgUrl}
                        onChange={handleChange}
                        />
                     <input 
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={imageInfo.title}
                        onChange={handleChange}
                        />
                     <input 
                        type="text" 
                        placeholder="Description"
                        name="description"
                        value={imageInfo.description}
                        onChange={handleChange}
                        />
                     <button >Submit</button>    
                 </form>
        </div>

       
    )
}

export default Form