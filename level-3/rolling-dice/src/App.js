import React, {Component} from "react"
import DiceBox from "./DiceBox"
import styles from "./styles.module.css"

 const diceRoll =   Math.floor((Math.random() * 6) + 1)
class App extends Component{

    state ={
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0
    }
    
    handleClick =() =>{
        this.setState()
          return{
            num1: diceRoll,
            num2: diceRoll,
            num3: diceRoll,
            num4: diceRoll,
            num5: diceRoll
          }  
        
       
        
    }
    
    

    render() {
        // const mappedDice = this.state.nums.map(nums => <DiceBox />)
        return(
            <div>
           
            <DiceBox />
            <button className={styles.button} onClick={this.handleClick}>Roll The Dice!</button>
            </div>
        )
       
       
    }
    
}

export default App

