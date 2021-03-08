const readLineSync = require('readline-sync');
let hp = 100;
let enemyHp = 100;
const randItemList = ["Golden Vannilla Paste", "Perfectly Ripened Orange", "Royal Honey"]
let randItem = [Math.floor(Math.random() * randItemList)]


const attack = Math.floor(Math.random(1, 50))

// readLineSync.question("What will you do? Pres 'w' to walk or 's' to search for ingredients") 

//greet, get name and store it
console.log("                            ~----The Ultimate Baking Showdown----~     ")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Oreo Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 

//ask to walk? 
console.log(`excellent, ${name}! Let's get cookin' /n To begin your journey, you must get the ingredients.In order to gather them, you must travel to the descolace known as 'The General Store'`)
const walk = readLineSync.question("Enter 'w' to walk: ") 
while (walk === "w"){
EnemyEncounter( name, chance, attack, enemyChoice,randItem, enemyHp, hp)
}
function EnemyEncounter( name, chance, attack, enemyChoice, randItem, enemyHp, hp){
//if enemy appears --> user chooses to run or attack

  let chance = Math.random(0,1)
if (chance === 1){    //enemies appear
let option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
const enemyList = ["Evil Eggs","Mutant Butter", "Rough Sugar", "Monstrous Flour" ]
const enemyChoice = [Math.floor(Math.random() * enemyList.length)];

  if (enemyChoice === "Evil Eggs"){
    console.log("You make your way forward, but a group of Evil Eggs ambushes you from behind!")
    return option 
}
else if(enemyChoice === "Mutant Butter"){
   console.log("When you walk forward, you catch a wild Mutant Butter off guard and it charges toward you")
   return option
   

}
else if(enemyList === "Rough Sugar"){
console.log("You move slowly, but a Rough Sugar Beast senses your presence and readies an attack")
return option

}
else{
 console.log("You search for what seems like miles, but you see no ingredients anywhere. You decide to rest before moving any further. Just as you sit down, you realise why the ingredients are scarce, but it is too late! The Monsterous Flour has already spotted you and begins its attack!")
 chance = 0
 return option
}
}
  

}
if(chance === 0){   //enemies don't appear
console.log("You continue your search for the perfect ingredients")
return walk
}

//if player kills enemy = +50 HP + special item
if (hp > 0 && enemyHp <= 0){
  console.log(`Excellent work, ${name}, you have defeated the evil ingredient. You search through the rubble and find ${randItem}`)
  hp += 20
  }

