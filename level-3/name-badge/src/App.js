import React, {Component} from 'react'
import NameBadge from "./NameBadge"

class App extends Component{
  
  state={
    firstName: "",
    lastName: "",
    email: "",
    birthPlace:"",
    phone: [],
    food: "",
    badges: []
  }
  handleChange =(e)=>{
    const {info, value} = e.target
    this.setState({
        [info]: value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    //clear old data/badge
    //add new badge
    this.setState(prevState => {

        return{
           badges: [] 
        }
    })
  }


  render(){
      //mapp
      return(
        <div>
        <form>
        <input    type="text" 
                  value={this.state.firstName} 
                  name="firstName" 
                  placeholder="First Name" 
                  onChange={this.handleChange}></input>

        <input    type="text" 
                  value={this.state.lastName} 
                  name="lastName" 
                  placeholder="Last Name" 
                  onChange={this.handleChange}></input>

        <input    type="text" 
                  value={this.state.email} 
                  name="email" 
                  placeholder="email" 
                  onChange={this.handleChange}></input>

        <input    type="text" 
                  value={this.state.birthPlace} 
                  name="birthPlace" 
                  placeholder="Place of Birth" 
                  onChange={this.handleChange}></input>

       <input    type="number" 
                  value={this.state.phone} 
                  name="phone" 
                  placeholder="Phone Number" 
                  onChange={this.handleChange}></input>

      <input    type="text" 
                  value={this.state.food} 
                  name="food" 
                  placeholder="Favorite Food" 
                  onChange={this.handleChange}></input>                       

              <textarea 
                  value={"Tell us about yourself"}
                  onChange={this.handleChange}
              />
            <button onClick={this.handleSubmit} >Add Name</button>
          </form>
        
          <NameBadge />
    </div>
      )
    
  }



}

export default App;
