import React from 'react'
import {ContextConsumer}  from './contextClass'

//receives props(user input)
function Form(props){
    return(
        <ContextConsumer>
            {context=>(
                 <div>
                 <form onSubmit = {context.SubmitForm}>
                     <input 
                        type="text" 
                        placeholder="Image URL"
                        name="image"
                        value={context.image}
                        onChange={context.handleChange}
                        />
                     <input 
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={context.title}
                        onChange={context.handleChange}
                        />
                     <input 
                        type="text" 
                        placeholder="Description"
                        name="description"
                        value={context.description}
                        onChange={context.handleChange}
                        />
                     <button >Submit</button>    
                 </form>
             </div>

            )}
           
        </ContextConsumer>
       
    )
}

export default Form