import React from 'react'
import { ContextConsumer } from './contextClass'

function ListDisplay (){
    return (
            <div>
                <ContextConsumer>
                    {
                        ({uglyThings})=>{
                                return uglyThings.map((item, _id)=> <uglyThing item={item} key ={_id}/>)

                        }
                    }
        </ContextConsumer>
               
               </div>                     
     )
    
    
}

export default ListDisplay