import React from "react"
import Spots from "./Spots"
import Card from "./Card"


let vacationCard = Spots.map(vacay => 
<Card key= {vacay.id} 
place= {vacay.place} 
price ={vacay.price} 
timeToGo ={vacay.timeToGo}/> 
)


function App(){  
    return(
        <div>
            <h1 class= "h1">Vacation Land</h1>
            {vacationCard}
        </div>
    )
}

export default App