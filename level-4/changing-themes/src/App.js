import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./Nav"

function App(){
    return(
        <div className ="container">
            <Header />
                 <Nav />
                    <Main />
                        <Footer />
     </div>


    )
}

export default App