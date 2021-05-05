import React, {Component} from "react"
import Square from "./Square"
 import styles from "./styles.module.css"

class App extends Component{
// constructor(){
//     super()
//     this.state ={
//         colors: ["white", "black", "white", "black"]
//     }
//     this.smallDj =  this.smallDj.bind(this)
//     this.partyDj =  this.partyDj.bind(this)

// }
state = {
    colors: ["black", "white", "white",  "black"]
}
smallDj = ()=>{
    this.setState(prevState =>{
        // You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.                             
    return {
        //object literal that represents the new version of state
        colors: prevState.colors.map(color =>{
            if(color !== 'white'){
                return 'white'
            }
            else{
                return 'black'
            }
        })
    }
 
    })
   
}
// Add a second button. The second will turn the top half (both squares) of the grid purple.
partyDj=()=>{
    this.setState(prevState =>{
        return{
            colors: prevState.colors.map((color, i) =>{
                if( i < 2){
                    return color ='blueviolet'
                }
                else{
                    return color
                }
                
            })
        }
       
    })
   
    
}
// Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.
rightBlue=()=>{
    this.setState(({colors}) =>({colors: colors.map((color,i) => i ===3 ? color='blue': color)}))
}

leftBlue=()=>{
    this.setState(({colors}) =>({colors: colors.map((color,i) => i ===2 ? color='blue': color)}))
}
render() {
    const boxes = this.state.colors.map(color => <Square backgroundColor={color}/>)

        return(
           <div className={styles.style}>
               {boxes}

               <div className={styles.buttonsContainer}>
                    <button className={styles.button} onClick={this.smallDj}>Small Time DJ</button>
                    <button className={styles.button} onClick={this.partyDj}>Party DJ</button>
                    <button className={styles.button} onClick={this.leftBlue}>Bottom Left</button>
                    <button className={styles.button} onClick={this.rightBlue}>Bottom Right</button>
                </div>
           </div>
           
        )
    }
}


export default App