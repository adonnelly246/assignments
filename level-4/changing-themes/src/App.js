import React from "react"
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./Nav"
import Button from "./Button"

function App(){
        return(
            <div className ="container">
                     <Nav />
                        <Main />
                            <Button/>
                                 <Footer />
            </div>
    
    
        )
  
}

export default App