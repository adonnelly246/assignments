import React, {Component} from "react"
import DiceBox from "./DiceBox"
import styles from "./styles.module.css"
import dice1 from "./images/dice1.jpg"

///images and assign them to the numbers
//bonus-click dice and have it stay
class App extends Component{

    state ={
        dice: [0,0,0,0,0,0],
        image: null
    }
  //roll dice, store values in state 
    randDiceRoll() {
        let number = Math.floor(Math.random() * (6)) + 1

        if(number === 1){
            //display dice1
            this.state.image = dice1
            return number + this.state.image
        }
        else if(number===2){
            //display dice2
        }
        else if(number===3){
            //display dice3
        }
        else if(number===4){
            //display dice4
        }
        else if(number===5){
            //display dice5
        }
        else {
            //display dice6
        }

        return number
    }

    handleClick = () => {
        this.setState(prevState => {    
            const diceRoll =  prevState.dice.map(num => this.randDiceRoll())                                 
             
             console.log(diceRoll)
                return { 
                   dice: diceRoll
                }
            })
    }

    
    render() {
        const roll =  this.state.dice.map((num) =>{ return <DiceBox key={this.state.id} dice={num}/>})  
        return(
            
    <div>      
       <h2> 
           {roll}
       </h2>
     
            <button className={styles.button} onClick={this.handleClick}>Roll The Dice!</button>
    </div>
        )
            
    }
    
}

export default App

