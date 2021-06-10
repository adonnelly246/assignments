import React, {Component} from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import Names from './Names.js'
class App extends Component{
  
    state={
    hitList: []
    }


componentDidMount() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(response => {
            this.setState({
                hitList: response.data
            })
        })
        .catch(err => console.log(err))
  }


  render(){
    const card = this.state.hitList.map(person => <Names key={person} name={person.name} image={person.image} />)
    return(
        <div>
            <h1 class={styles.h1}><img class={styles.donImage}/>Don Corleone's Hit List</h1>
                <div class= {styles.gridContainer}>
                    {card}
                </div>
        </div>
    )
}
}

export default App;