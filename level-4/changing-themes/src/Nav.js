import React from "react"
import {ThemeConsumer} from './themeContext'

function Nav(props){
    return(
        <ThemeConsumer>
            {context =>(
                <div >
                    <nav className= {`${context.theme}-theme`}>
                    <ul className ='nav'>
                        <li>nav1</li>
                        <li>nav2</li>
                        <li>nav3</li>
                    </ul>
                    </nav>
                </div>
            )}
        
        </ThemeConsumer>
       
    )

}

export default Nav