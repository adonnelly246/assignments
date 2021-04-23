import React from "react"

  function Card(props){
    let pricePlus$ = ""
    if(props.price <500){
    pricePlus$ = "$"+ props.price
    }
    else if(props.price < 1000 && props.price > 500){
      pricePlus$ = "$$" + props.price
    }
    else if(props.price >= 1000){
      pricePlus$ = "$$$" + props.price
    }

    if(props.timeToGo ==="Spring"){
      
    }
      return(
          <div class= "card">
              <h3>{props.place}</h3>
              <p>{pricePlus$}</p>
              <p>Best time to Go: {props.timeToGo}</p>
          </div>
  
      )
      
  }


export default Card