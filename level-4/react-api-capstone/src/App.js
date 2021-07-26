import React from "react"
import {ContextConsumer} from "./Context"
import FormSearch from "./FormSearch"
import Nav from "./Nav"

function App(){
    return(
        <div>
            <Nav/>
        <ContextConsumer>
            {context=>(
                context.newSearchArray.map(info => <FormSearch info={info} />)
             
            )}
        </ContextConsumer>
            <div>
                <h2>Trademark Checker</h2>
                <p>Use the searchbar or the "New Search" option above to search trademarks by name, serial number, owner, upcoming expiration date, and product/service description</p>
            </div>
        </div>
    )
}

export default App