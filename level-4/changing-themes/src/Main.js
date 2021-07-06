import React from "react"
import {ThemeConsumer} from "./themeContext"

function Main(props){
    return(
    <ThemeConsumer>
        {context=>(
            <div className= {`${context.theme}-theme`}>
                 <h1> {context.theme === "light" ? "Light" : "Dark"} Theme</h1>
                   <p>Paragraph of content Lorem Ipsum</p> 
            </div>
           
        )}
    </ThemeConsumer>
    )
  
    

}

export default Main