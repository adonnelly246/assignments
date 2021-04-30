import React from "react"

function BlogPost(props){
    return(
       <div>
           <h2>{props.title}</h2>
           <p>{props.subTitle}</p>
           <p>Posted by {props.author} on {props.date}</p>
           
       </div> 
    )

}

export default BlogPost