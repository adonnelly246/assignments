// You will organize it into these components:

// (Indented components are suppose to be nested. E.g. Header should render a Navbar component and BlogList should render a BlogPost component).

// <Header />
//     <Navbar />
// <BlogList />
//     <BlogPost />
// <Footer />
// You will pass <BlogPost /> its title, subTitle, author, and date through props.

// For now, we're using hard-coded data (seen below), but eventually you'll be able to pull this data from an API instead.

// But until we get there, feel free to use .map() on the following array of data:
import React from "react"
import ReactDOM from "react-dom"
import BlogList from "./BlogList"

ReactDOM.render(<Header />, document.getElementById("header"))
ReactDOM.render(<Navbar />, document.getElementById("nav"))
ReactDOM.render(<BlogList />, document.getElementById("root"))
ReactDOM.render(<Footer />, document.getElementById("footer"))
// Passing Criteria
// The site needs to work, in such that the data from this array through React components and displayed to the user.

// As far as how it looks, Practice placing the text over the image. Make it look nice and generally like the site. After the text is over the image, see how much styling you can do in a focused hour.