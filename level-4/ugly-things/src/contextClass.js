import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{
    state={
        image: "",
        title: "",
        description:"",
        userImages: []
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    SubmitForm = (event) =>{
        event.preventDefault()
        const newImage = {
            image: this.state.image,
            title: this.state.title,
            description: this.state.description
        }

        //on submit- add to displayed images from the form input img url
        this.setState(prevState => {
            return {
                image:"",
                title: "",
                description: "",
                userImages:  [newImage, ...prevState.userImages]   
            }
        })
    }

    render() {
        return (
            <Provider value={{image: this.state.image, title: this.state.title, 
                            description: this.state.description, userImages: this.state.userImages,
                             SubmitForm: this.SubmitForm, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}