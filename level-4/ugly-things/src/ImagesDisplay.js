import React, {useContext} from 'react'
import { ContextClass } from './contextClass'
import UglyThing from './UglyThing'


function ImagesDisplay (props){
    const context = useContext(ContextClass)
    const list = context.uglyThingsArray.map((item) => {
      return <UglyThing 
        item={item} 
        key ={item._id}
        title ={item.title}
        imgUrl = {item.imgUrl}                            
        description = {item.description}
        _id={item._id}
        />

    })
           
    return (
            <div className="list">
              
                {list}
                {/* {console.log(list)} */}
            </div>                     
     )
    
    
}

export default ImagesDisplay