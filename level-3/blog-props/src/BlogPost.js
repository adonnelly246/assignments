import React from "react"
import styles from "./styles.module.css"

function BlogPost(props){
    return(
       <div className={styles.post}>
           <div className={styles.titles}><h2 className={styles.title}>{props.title}</h2>
           <p className={styles.subTitle}>{props.subTitle}</p>
           <p className={styles.author}>Posted by {props.author} on {props.date}</p>
           </div>
           
       </div> 
    )

}

export default BlogPost