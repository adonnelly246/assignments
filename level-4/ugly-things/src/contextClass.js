import React, {useState, useEffect} from "react"
import axios from 'axios'
const ContextClass = React.createContext()

function ContextProvider (props){
  
    const [uglyThingsArray, setUglyThingsArray] = useState([
        { 
            imgUrl:"https://images.unsplash.com/photo-1467103789230-f91a5ff8048a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            title:"Creepy doll", 
            description: "creepy!"  
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            title:"Trash", 
            description: "it stinks!" 
        }
    ])

    const getUglyThings = () => {
        axios.get(`https://api.vschool.io/adonnelly246/thing`)
        .then(res => {
            const images = res.data
         return setUglyThingsArray([images, ...uglyThingsArray])
            console.log(uglyThingsArray)
        })
        .catch(err => console.log(err))
    }
    

    useEffect(()=>{
        return getUglyThings()
    }, [])

    
    
    const handleSubmit = (event, newItem) =>{
        event.preventDefault()
        //    setUglyThingsArray(prevArray => [newItem, ...prevArray])
        console.log(newItem)

        axios.post(`https://api.vschool.io/adonnelly246/thing/`, newItem) //500
        
        .then(res => {
            // const newArray = res.data
            // setUglyThingsArray([newArray, newItem, ...uglyThingsArray])     
            return getUglyThings()
        
       // return console.log(uglyThingsArray)
     })
        .catch(err => console.log(err))

    }
  
    
   
     const handleDelete = (id) => {
        setUglyThingsArray(prevArray => {
           let newArr = axios.delete(`https://api.vschool.io/adonnelly246/thing/`+{id}) 
        //    let newArr = prevArray.filter((item, itemId) => itemId !== id)
           return newArr
        })
     }
  
    const handleEdit = (itemId, editedItem, event) => {
        event.preventDefault()
        setUglyThingsArray(prev =>{
            let newArr = axios.put(`https://api.vschool.io/adonnelly246/thing/`+{itemId})   
            // let newArr = prev.uglyThingsArray.map((item,id)=> itemId ===id ? editedItem : item)
            return newArr
        })
     }

     

        return (
            <ContextClass.Provider value={{
                            uglyThingsArray: uglyThingsArray,
                            handleSubmit: handleSubmit, 
                            handleDelete: handleDelete, 
                            handleEdit: handleEdit
                             
                             }}>
                {props.children}
            </ContextClass.Provider>
        )
    
}

export {ContextProvider, ContextClass }