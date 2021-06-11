import React, {Component} from 'react'
import DisplayColors from './DisplayColors'
import axios from 'axios'

class App extends Component{
    state={
        colorsList: []
    }
    componentDidMount() {
        axios.get('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')

        //https://www.colr.org/json/color/random

            .then(response => {
                this.setState({
                    colorsList: response.hex
                    
                })
            })
            .catch(err => console.log(err))
      }

      render(){
          const randColor = this.state.colorsList.map(color=> color.name)
          return (
              <div style ={{backgroundColor: {randColor}}}> 
              
              <div><button onClick={randColor}></button></div>
              
              </div>
          )
      }

}


export default App
