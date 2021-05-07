import React, {Component} from 'react'

class App extends Component{

    state={
        firstName: "",
        lastName: "",
        firstPlusLast: "",
        namesArr: []
    }
    handleChange=(event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState(prevState => {

            return{
                namesArr: [...prevState.namesArr, {firstPlusLast: prevState.firstName +" " + prevState.lastName}]
                
            }
        })
    }

  render(){
    
    const mappedArray = this.state.namesArr.map(nameObj => <li>{nameObj.firstPlusLast}</li>)
      return(
      <div>
          <form>
          <input    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="first Name" 
                    onChange={this.handleChange}></input>

              <input type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}></input>
              <button onClick={this.handleSubmit} >Add Name</button>
            </form>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <ul>
                {mappedArray}
            </ul>
      </div>
      )
  }  
}
export default App