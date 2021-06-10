import React, {Component} from 'react'
import Color from './DisplayColors.js'
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
          const randColor = this.state.colorsList
          return (
              <div style ={{backgroundColor: {randColor}}}> </div>
          )
      }

}


export default App
