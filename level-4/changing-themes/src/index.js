import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "./themeContext"
import App from "./App"
import styles from './styles.css'

ReactDOM.render(
<ThemeProvider><App /></ThemeProvider>,  
document.getElementById('root')); 

/*You must:
Provide a Dark and a Light theme
Have at least 3 display components:
ex: Navbar, Footer, Main
Create a ThemeProvider component that manages the themes using Context. */