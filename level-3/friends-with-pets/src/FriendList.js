import React from "react"
import Friend from "./Friend"
import Pet from "./Pet"


export const friends = [
    {
      id: 1,
      name: "Ben",
      age: 29,
      pets: [
        {
          id: 1.1,
          name: "spot",
          breed: "tabby"
        },{
          id: 1.2,
          name: "John Johnson",
          breed: "husky"
        },{
          id: 1.3,
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      id: 2,
      name: "Bob",
      age: 31,
      pets: [
        {
          id: 2.1,
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      id: 3,
      name: "Marcus",
      age: 25,
      pets: [
        {
          id: 3.1,
          name: "Indy",
          breed: "Akita"
        },{
          id: 3.2,
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      id: 4,
      name: "Jacob",
      age: 20,
      pets: [
        {
          id: 4.1,
          name: "fluffy",
          breed: "sphynx cat"
        },{
          id: 4.2,
          name: "patches",
          breed: "sphynx cat"
        },{
          id: 4.3,
          name: "tiger",
          breed: "sphynx cat"
        },{
          id: 4.4,
          name: "oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ]



 function FriendList(){
  
    const friendsWithPets = friends.map(person => {
        return(
        <Friend key= {person.id} 
        name= {person.name} 
        age ={person.age} 
        pets ={person.pets}/>
        )
      })
     return(
         <div>
             {friendsWithPets}
         </div>
     )
 }


 export default FriendList