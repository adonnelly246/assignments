import React from "react"
import {ThemeConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeConsumer>
            {context => (
                <button onClick={context.changeTheme} className={`${context.theme}-theme`}>Change The Theme</button>
            )}
        </ThemeConsumer>
    )    
}

export default Button