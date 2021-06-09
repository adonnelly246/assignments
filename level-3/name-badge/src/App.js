
import React, {Component, useState} from 'react'
import NameBadge from "./NameBadge"
import styles from "./styles.module.css"


class App extends Component{
  
  state={
    
    firstName: "",
    lastName: "",
    email: "",
    birthPlace:"",
    phone: "",
    food: "",
    about: "",
    badgeArr: [],
    phoneErr:"",
    inputLengthErr: "",
    emailErr: ""
  }
  
  handleChange =(e)=>{
    
    const {name, value} = e.target
    this.setState({
      [name]: value
  })
  }
  


 
 validate = () => {
 let  phoneErr=""
  let inputLengthErr= ""
  let emailErr = ""

  //validate character length
if((this.state.firstName.length || this.state.lastName.length || this.state.food.length || this.state.birthPlace.length) < 3 ){
  inputLengthErr = "Character length must be at least 3"
}

else if(!this.state.email.includes("@" && ".com")){
  emailErr = " Invalid Email"
}
//validate phone number has only numbers
else if(this.state.phone.includes("-"|| " ")) {
  phoneErr = "Please enter valid phone number without dashes."

}

if (phoneErr || inputLengthErr || emailErr){
  this.setState({phoneErr, inputLengthErr, emailErr});
  return false
}

return true
};

  handleSubmit = (e)=>{
    e.preventDefault();
    const isValid = this.validate();
   
    if(isValid){
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
        phoneErr:"",
        inputLengthErr: "",
        emailErr: "",

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
  };

 

  render(){
    let reversedBadges = []
    const badges = this.state.badgeArr.map((badge => reversedBadges.unshift(badge)))
      
    const displayedBadges = reversedBadges.map((badge)=>{ 
            return <NameBadge key={this.state.id}  {...badge} />})

      return(
        <div >

          <div style= {{fontSize: 14, color:'red'}}>{this.state.inputLengthErr}</div>
          <div style= {{fontSize: 14, color:'red'}}>{this.state.phoneErr}</div>
          <div style= {{fontSize: 14, color:'red'}}>{this.state.emailErr}</div>

        <form onSubmit={this.handleSubmit} class={styles.mainContainer}>
       
          <div >
          
          <input
                style={{position: "absolute", top: "30px", left:"80px", padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.firstName} 
                  name="firstName" 
                  placeholder="First Name" 
                  onChange={this.handleChange}
                 />
                  

        <input    
                  style={{position: "absolute", top: "30px", left:"355px", 
                           padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.lastName} 
                  name="lastName" 
                  placeholder="Last Name" 
                  onChange={this.handleChange}
                 
                 />
          

        <input    
                   style={{position: "absolute", top: "75px", left:"80px",
                           padding:"5px", border: "solid 2px"}}
                  type="text"
                  value={this.state.email} 
                  name="email" 
                  placeholder="email" 
                  onChange={this.handleChange}
                  
                 />
                  

        <input    
                 style={{position: "absolute", top: "75px", left:"355px",
                         padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.birthPlace} 
                  name="birthPlace" 
                  placeholder="Place of Birth" 
                  onChange={this.handleChange}
                  
                />
                

       <input    
                 style={{position: "absolute", top: "115px", left:"80px",
                          padding:"5px", border: "solid 2px"}}
                  type="number"
                  pattern="[0-9]*" 
                  inputmode="numeric"
                  value={this.state.phone} 
                  name="phone" 
                  placeholder="Phone Number" 
                  onChange={this.handleChange}
             
                  />
                   
      <input      
                   style={{position: "absolute", top: "115px", left:"355px",
                            padding:"5px", border: "solid 2px"}}
                  type="text" 
                  value={this.state.food} 
                  name="food" 
                  placeholder="Favorite Food" 
                  onChange={this.handleChange}
                
                 />
                                   
          </div>
          <textarea 
                  style={{position: "absolute", top: "155px", left:"150px", width: "250px", height: "60px",
                          padding:"5px", border: "solid 2px" }}
                  value={this.state.about}
                  name="about"
                  placeholder={"Tell us about yourself"} 
                  onChange={this.handleChange}
              />
              {/* disable submit button when not all fields are full */}
            <button disabled={!this.state.firstName || !this.state.lastName || !this.state.phone || !this.state.email || !this.state.birthPlace|| !this.state.food || !this.state.about } style={{padding:"5px", border: "solid 3px", borderRadius: "6px", position: "absolute", top: "245px", left: "200px"}}  >Add Name</button>

            
          </form>

          {displayedBadges}
    </div>
      )
    
  }


}


export default App;
