import react from 'react'

function UglyThing (props){
    return(
        <div>
              <h3>{props.item.title}</h3>
              <img className="image" src={props.item.imgUrl} alt={props.item.description} width="400px" maxHeight="400px"/>
              <p>{props.item.description}</p>

        </div>
    )
}

export default UglyThing