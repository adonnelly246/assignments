import React, {Component} from 'react'
import styles from '/styles.module.css'
class App extends Component{
  
    state={
    hitList: []
    }


componentDidMount() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(response => {
            this.setState({
                hitList: response
            })
        })
        .catch(err => console.log(err))
  }


  render(){
    const card = this.state.hitList.map(person => <Card key={person} name={person.name} image={person.image} />)
    return(
        <div>
            <nav>
            </nav>
            <main style={styles}>
                <div className='gridContainer'>
                    {card}
                </div>
            </main>
        </div>
    )
}
}

export default App;