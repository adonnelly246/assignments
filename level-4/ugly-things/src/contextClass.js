import React, {Component} from "react"
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state={
    
            imgUrl: "",
            title: "",
            description:""
        ,
        uglyThings: [],
        isEditing: false
    }

    componentDidMount(){
        axios.get(`https://api.vschool.io/adonnelly246/thing`)
            .then(res => {
                const {images} = res.data
                this.setState({
                    uglyThings: images 
                })
                console.log(this.state.uglyThings)
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    
    handleSubmit = (event) =>{
        event.preventDefault()
        const newImage = {
                imgUrl: this.state.imgUrl,
                title: this.state.title,
                description: this.state.description  
        }
        axios.post(`https://api.vschool.io/adonnelly246/thing/`+{newImage}) //404
        .then(res => {
         const images = res.data
         this.setState({
             uglyThings: images 
         })
         console.log(this.state.uglyThings)
     })
     .catch(err => console.log(err))
           //on submit- add to displayed images from the form input img url
           this.setState(prevState => {
            return {
                image:"",
                title: "",
                description: "",
                uglyThings:  [newImage, ...prevState.uglyThingse], 
                isEditing: false   
            }
            
        })
    }
  
    
   
     handleDelete = (id, event) => {
        event.preventDefault()
        //axios.delete(`https://api.vschool.io/adonnelly246/thing/{id}`)
        this.setState(prevState => {
           let newArr = prevState.uglyThings.filter((thing, i) => i !== id)
           return {
              uglyThings: newArr
           }
        })
     }
  
     handleEdit = (id, event) => {
        //  axios.put(`https://api.vschool.io/adonnelly246/thing/{id}`)
        event.preventDefault()
        let uglyThings = this.state.uglyThings
        let uglyThing = {...uglyThings[id], isEditing: true}
        uglyThings[id] = uglyThing
        this.setState(()=> ({uglyThings, title: uglyThing.title, isEditing: true}))
     }

     
    

    render() {
        return (
            <Provider value={{
                            imgUrl: this.state.imgUrl, 
                            title: this.state.title, 
                            description: this.state.description, 
                            uglyThings: this.state.uglyThings,
                            handleSubmit: this.handleSubmit, 
                            handleChange: this.handleChange, 
                            handleDelete: this.handleDelete, 
                            handleEdit: this.handleEdit
                             
                             }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}