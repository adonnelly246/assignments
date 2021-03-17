

//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var i = 0; i < officeItems.length; i++){
  if (officeItems[i] == "computer"){
    var compCount = 0
    compCount + 1;  
  }
  
}
console.log(compCount);

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){

  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    var oldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough."

      if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      oldEnough += " She's good to see Mad Max Fury Road."
    }
      else{
      oldEnough += " He's good to see Mad Max Fury Road."
    }
   
  }
   else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
    var oldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max"

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
      oldEnough += " Don't let her in."
    }
    else{
      oldEnough += " Don't let him in."
    }
    
  }
  console.log(oldEnough);
}


