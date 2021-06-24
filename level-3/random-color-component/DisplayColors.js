import React from 'react'

// useEffect(color) = document.body.style.backgroundColor = '#'+{color} 

function DisplayColors(props) {
    console.log(props.randColor)
     const newCol = props.randColor
      return (
        <div style={{backgroundColor: "#" + newCol, width: "300px", height: "300px"}}>
            <div style={{backgroundColor:"#"+ props.randColor}}></div>
        </div>
    )
}
export default DisplayColors