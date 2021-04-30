import React from "react"
import Square from "./Square"
 import styles from "./styles.module.css"

class App extends React.Component{
constructor(){
    super()
    this.state ={
        colors: ["white", "white", "white", "white"]
    }
    this.handleClick =  this.handleClick.bind(this)
}

handleClick() {
    this.setState(prevState => {
        // You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.
        if(this.preSstate.colors = "white"){
            this.state.colors ="black"
        }
        else{
            this.backgroundColor = "black"
        }
        return {
            colors: prevState.colors
        }
    })
}

render(){
    const boxes = this.state.colors.map(color => <Square key={color.id} color={this.state.color}/>)
        return(
           <div className={styles.style}>
               {boxes}

               <div className={styles.buttonsContainer}>
                    <button className={styles.button}>Small Time DJ</button>
                    <button className={styles.button}>Party DJ</button>
                    <button className={styles.button}>Professional DJ</button>
                </div>
           </div>
           
        )
    }
}

// <Square color={this.state.colors[0]}/>
// <Square color={this.state.colors[1]}/>
// <Square color={this.state.colors[2]}/>
// <Square color={this.state.colors[3]}/>




export default App