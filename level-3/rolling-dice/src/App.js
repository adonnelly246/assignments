import React, {Component} from "react"
import DiceBox from "./DiceBox"
import styles from "./styles.css"
import dice1 from "./images/dice1.jpg"
import dice2 from "./images/dice2.jpg"
import dice3 from "./images/dice3.jpg"
import dice4 from "./images/dice4.jpg"
import dice5 from "./images/dice5.jpg"
import dice6 from "./images/dice6.jpg"


class App extends Component{

    state ={
        dice: [
            {num: 0, image: ""},
            {num: 0, image: ""},
            {num: 0, image: ""},
            {num: 0, image: ""},
            {num: 0, image: ""},
            {num: 0, image: ""}],
        image: '',
        imageAlt: ''
    }
  //roll dice, store values in state 
    randDiceRoll() {
        let number = Math.floor(Math.random() * (6)) + 1
        let image = ""
        // let newDice = this.state.dice.map(obj => {
        //     if(number === 1) {
        //         return {image: dice1}
        //     }
        // })
        
        if(number === 1){
            image = dice1
        }
        else if(number===2){
            image = dice2
        }
        else if(number===3){
          image= dice3
        }
        else if(number===4){
          image= dice4   
        }
        else if(number===5){
          image= dice5    
        }
        else {
          image= dice6
        }

        return {num: number, image: image}
    }

    handleClick = () => {
        this.setState(prevState => {    
            const diceRoll =  prevState.dice.map(obj => this.randDiceRoll() )                                 
             
             console.log(diceRoll)
                return { 
                   dice: diceRoll,
                   image:this.state.image,
                   imageAlt:this.state.imageAlt
                }
            })
    }

    
    render() {
        const roll =  this.state.dice.map((obj) =>{ return <DiceBox key={this.state.id} dice={obj.num} image={obj.image}/>})  
       
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

