import React from "react"
import BlogPost from "./BlogPost"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Header from "./Header"
const data=
[
    {
        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"
    },{
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "eptember 18, 2019"
    },{
        title: "Science has not yet mastered prophecy",
        subTitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2019"
    },{
        title: "Failure is not an option",
        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2019"
    }
]




function BlogList(){

    const blogPostArr = data.map(post => {
        return( 
        < BlogPost key= {post.id}
          title = {post.title}
         subTitle = {post.subTitle}
         author ={post.author}
         date ={post.date}
         />  
        )
     })

    
     return(
         <div>
             <header>
                <nav><Navbar/></nav>
                <Header />
             </header>  
             {blogPostArr}

             <footer><Footer/></footer>
         </div>
     )
 }

 export default BlogList