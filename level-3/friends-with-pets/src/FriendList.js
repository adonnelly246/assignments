import Friend from "./Friend"
import friends from "./Pet"


  let friendsWithPets = friends.map(person => 
    <Friend key= {person.id} 
    name= {person.name} 
    age ={person.age} 
    petBreed ={person.pets.breed} 
    petName ={person.pets.name}/> 
    )
 function FriendList(){
     return(
         <div>
             {friendsWithPets}
         </div>
     )
 }

 export default FriendList