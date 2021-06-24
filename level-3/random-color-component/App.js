import React, {Component} from 'react'
import axios from 'axios'
import DisplayColors from './DisplayColors'


class App extends Component{
    state={
        randColor: ""
    }

    handleClick = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => {
            this.setState({
                randColor: response.data.new_color           
            })
        })
        .catch(err => console.log(err))
      
    }

    componentDidMount() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        
        //https://www.colr.org/json/color/random 

        .then(response => {
            //console.log(...response.data.new_color)
            this.setState({
                randColor: response.data.new_color    
            })
        })
        .catch(err => console.log(err))     
    } 

      render(){ 
        //const newRandColor = this.state.randColor.map(color =>)
          return (
              <div>
                    <DisplayColors randColor={this.state.randColor}/>
                    <div ><button onClick={this.handleClick}>button</button></div>
              </div>
          )
      }

}


export default App
