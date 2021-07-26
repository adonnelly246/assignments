import React from "react"
import {ContextConsumer} from "./Context"
import FormSearch from "./FormSearch"
import Nav from "./Nav"

function NewSearch(props){
    return(
        <div>
            <Nav/>
            <FormSearch/>
            <button onClick= {props.NewSearch}>SEARCH!</button>
            <h1>Results</h1>
            <h3>{props.newSearchArray.trademark}</h3>
        
                  <div> 
                    <ul><li>{props.newSearchArray}</li></ul>  
                    <button onClick={props.SaveSearch()}>Save Search</button>
                </div>
        
          
        </div>   
    )
}

export default NewSearch