import React, {useState, useEffect} from "react"
import axios from 'axios'
const ContextClass = React.createContext()

function ContextProvider (props){
  
    const [uglyThingsArray, setUglyThingsArray] = useState([])

    const getUglyThings = () => {
        axios.get(`https://api.vschool.io/adonnelly246/thing`)
        .then(res => {
            return setUglyThingsArray(prevArr => res.data)
        })
        .catch(err => console.log(err))
    }
    

    useEffect(()=>{
        return getUglyThings()
    }, [])

    
    
    const handleSubmit = (e, newItem) =>{
        e.preventDefault()
        console.log(newItem)
        //    setUglyThingsArray(prevArray => [newItem, ...prevArray])
        axios.post(`https://api.vschool.io/adonnelly246/thing/`, newItem) 
            .then(res => {
                return getUglyThings()
            })
        .catch(err => console.log(err))
        // setUglyThingsArray([newArray, newItem, ...uglyThingsArray])      
    }
  
    
   
    const handleDelete = (e, id) => {
        e.preventDefault()
        axios.delete(`https://api.vschool.io/adonnelly246/thing/${id}`) 
            .then(res => {
                return getUglyThings()
            })
            .catch(err => console.log(err))
    }
  
    const handleEdit = (e, id, itemToEdit) => {
        e.preventDefault()
        axios.put(`https://api.vschool.io/adonnelly246/thing/${id}`, itemToEdit)   
            .then(res => {
                return getUglyThings()
            })
            .catch(err => console.log(err))   
    // let newArr = prev.uglyThingsArray.map((item,id)=> itemId ===id ? editedItem : item)  
     }

     

        return (
            <ContextClass.Provider value={{
                           uglyThingsArray,
                           handleSubmit, 
                           handleDelete, 
                           handleEdit
                             
                             }}>
                {props.children}
            </ContextClass.Provider>
        )
    
}

export {ContextProvider, ContextClass }