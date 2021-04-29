import React from "react"

function BlogPost(props){
    return(
       <div>
           <h2>{props.title}</h2>
           <p>{props.subTitle}</p>
           <p>{props.author} {props.date}</p>
           
       </div> 
    )

}

export default BlogPost