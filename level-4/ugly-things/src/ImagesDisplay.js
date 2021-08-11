import React, {useContext} from 'react'
import { ContextClass } from './contextClass'
import UglyThing from './UglyThing'


function ImagesDisplay (){
    const context = useContext(ContextClass)
    const list = context.uglyThingsArray.map((item, _id)=> {
      return <UglyThing 
        item={item} 
        key ={_id}
        title ={UglyThing.title}
        imgUrl = {UglyThing.imgUrl}
        decription = {UglyThing.description}
        />

    })
           
    return (
            <div>
                {list}
                {console.log(list)}
            </div>                     
     )
    
    
}

export default ImagesDisplay