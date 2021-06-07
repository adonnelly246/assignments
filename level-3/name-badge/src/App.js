import React, {Component} from 'react'
import NameBadge from "./NameBadge"
import styles from "./styles.module.css"

class App extends Component{
  
  state={

    firstName: "",
    lastName: "",
    email: "",
    birthPlace:"",
    phone: [],
    food: "",
    about: "",
    badgeArr: []
  }
  handleChange =(e)=>{
    const {name, value} = e.target
    this.setState({
        [name]: value

    })
    //check length of input >= 3
    if(value.length < 3) {
      alert('Your text is less than 3 characters');
   }
//validate phone number has only numbers
  }

  handleSubmit = (e)=>{
    e.preventDefault();
  
    //add new badge
    this.setState(prevState => {
     
 

        return{
          firstName: "",
          lastName: "",
          email: "",
          birthPlace: "",
          phone:"",
          food: "",
          about: "",

          badgeArr: [
            ...prevState.badgeArr, {  firstName: prevState.firstName,
              lastName: prevState.lastName,
              email: prevState.email,
              birthPlace: prevState.birthPlace,
              phone: prevState.phone,
              food: prevState.food,
              about: prevState.about
            }
          ]  
        }
        
    })
     
  }

 

  render(){
    let reversedBadges = []
    const badges = this.state.badgeArr.map((badge => reversedBadges.unshift(badge)))
      const displayedBadges = reversedBadges.map((badge)=>{ 
        return <NameBadge key={this.state.id}  {...badge} />})
      
      
    
      return(
        <div >
            
        <form onSubmit={this.handleSubmit} class={styles.mainContainer}>
       
          <div >
          <input
                style={{position: "absolute", top: "30px", left:"80px", padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.firstName} 
                  name="firstName" 
                  placeholder="First Name" 
                  onChange={this.handleChange}
                 ></input>

        <input    
                  style={{position: "absolute", top: "30px", left:"355px", 
                           padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.lastName} 
                  name="lastName" 
                  placeholder="Last Name" 
                  onChange={this.handleChange}
                 ></input>

        <input    
                   style={{position: "absolute", top: "75px", left:"80px",
                           padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.email} 
                  name="email" 
                  placeholder="email" 
                  onChange={this.handleChange}
                 ></input>

        <input    
                 style={{position: "absolute", top: "75px", left:"355px",
                         padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.birthPlace} 
                  name="birthPlace" 
                  placeholder="Place of Birth" 
                  onChange={this.handleChange}
                ></input>

       <input    
                 style={{position: "absolute", top: "115px", left:"80px",
                          padding:"5px", border: "solid 2px"}}
                  type="number" 
                  value={this.state.phone} 
                  name="phone" 
                  placeholder="Phone Number" 
                  onChange={this.handleChange}
                  ></input>

      <input      
                   style={{position: "absolute", top: "115px", left:"355px",
                            padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.food} 
                  name="food" 
                  placeholder="Favorite Food" 
                  onChange={this.handleChange}
                 ></input>                       
          </div>
          <textarea 
                  style={{position: "absolute", top: "155px", left:"150px", width: "250px", height: "60px",
                          padding:"5px", border: "solid 2px" }}
                  value={this.state.about}
                  name="about"
                  placeholder={"Tell us about yourself"} 
                  onChange={this.handleChange}
              />
            <button  style={{padding:"5px", border: "solid 3px", borderRadius: "6px", position: "absolute", top: "245px", left: "200px"}}  >Add Name</button>
          </form>
     
          {displayedBadges}
    </div>
      )
    
  }



}

// If you want to disable a button when an input string is empty, then the only state you need is the value of the input string.

// const [inputVal, setInputVal] = useState('')

// // ...

// <input value={inputVal} onChange={e => setInputVal(e.target.value)} />

// // ...

// <button disabled={!inputVal}> /* ... */ </button>

export default App;
