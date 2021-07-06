import React from "react"
import {ThemeConsumer} from "./themeContext"

function Footer(props){
    return(
        <ThemeConsumer>
            {context=>(
                <footer className={`${context.theme}-theme`}>This is the Footer</footer>
            )}
        </ThemeConsumer>

    )

}

export default Footer