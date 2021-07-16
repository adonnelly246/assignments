import React from "react"
import {ContextConsumer} from "./Context"
import FormSearch from "./FormSearch"

function NewSearch(props){
    return(
        <div>
            <Nav/>
            <FormSearch/>
            <button onClick= {props.NewSearch}>SEARCH!</button>
            <h1>Results</h1>
            <h3>{props.newSearchArray.trademark}</h3>
        <ContextConsumer>
            {context=>(
                context.newSearchArray.map(info => <FormSearch info={info} />)

            )}
                  <div> 
                    <ul><li>{context.newSearchArray}</li></ul>  
                    <button onClick={props.SavedSearch()}>Save Search</button>
                </div>
        
        </ContextConsumer>
          
        </div>   
    )
}

export default NewSearch