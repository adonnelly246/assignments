import React, {Component} from "react"
import DiceBox from "./DiceBox"
import styles from "./styles.module.css"


class App extends Component{

    state ={
        nums: [0,0,0,0,0]
        
    }
  //roll dice, store values in state -font awesome icons
    //cdn
    randDiceRoll() {
        return Math.floor(Math.random() * (6)) + 1
    }
    handleClick = () => {
        this.setState(prevState => {    
            const diceRoll =  prevState.nums.map(num => this.randDiceRoll())                                 
             
             console.log(diceRoll)
                return { 
                   nums: diceRoll
                }
            })
    }

    
    render() {
        const roll =  this.state.nums.map(num => this.randDiceRoll())  
        return(
            
            <div>      
       <h2> <DiceBox nums={roll}/>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       </h2>
     
            <button className={styles.button} onClick={this.handleClick}>Roll The Dice!</button>
            </div>
        )
            
    }
    
}

export default App

