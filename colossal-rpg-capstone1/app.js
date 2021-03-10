const readLineSync = require('readline-sync');
//need to add attack dmg tracker,  hp tracker, fix enemy===[i] if else statements(not sure they are itterating), and push item to inventory when defeat enemy.

//greet, get name and store it
console.log("                                    ~----The Ultimate Baking Showdown----~     ")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Oreo Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 
let gameOver = false
//function for chance of enemy appearing
const EnemyAppearChance = max => Math.floor(Math.random() * Math.floor(max));

  //function for getting random enemy from enemy object
  function EnemyListChoice(enemyList){
    let enemyChoice = enemyList
  return Math.floor(Math.random() * Math.floor(enemyChoice))
  }
  //function to randomly get run chance
    function CanRun(max){     
        let canRun = Math.floor(Math.random() * Math.floor(max))
        if(canRun == 1){
        let escape = `You are unable to run away, ${name}, Prepare for an attack!`
        return  escape
        }
        else{
         let escape = `You were able to escape, and continue walking forward.`
         return  escape
        } 
}
//function to keep track of dmg
function AttackDmg(min,max){
    return Math.floor(Math.random() * Math.floor(min,max));
  }

//player object
const playerInfo = [
  { name: name,
    hp: 100,
    inventory: []}  //when get item, push to playerInfo.inventory[i]
]

//enemies object
const enemyList = [
  { name: "Evil Eggs",
    hp: 90,
    intro:  "You make your way forward, but a group of Evil Eggs ambushes you from behind!",
    attack: [10, 5, 2, 1]
  },
  { name: "Mutant Butter",
  hp: 150,
  intro:  "When you walk forward, you catch a wild Mutant Butter off guard and it charges toward you",
  attack: [10, 5, 2, 1]
},
  {
    name: "Rough Sugar",
    hp: 150,
    intro: "You move slowly, but a Rough Sugar Beast senses your presence and readies an attack",
    attack: [20, 10, 5, 2]
  },
  {
    name: "Monsterous Flour",
    hp: 200,
    intro: "You search for what seems like miles, but you see no ingredients anywhere. You decide to rest before moving any further. Just as you sit down, you realise why the ingredients are scarce, but it is too late! The Monsterous Flour has already spotted you and begins its attack!",
    attack: [40, 20, 30, 10]
  }

]



//ask to walk or check stats 
console.log(`Excellent, ${name}! Let's get cookin' ! To begin your journey, you must get the ingredients. In order to get all of the ones you need, you must travel to the descolace known as 'The General Store'`)
while (gameOver === false){
let walk = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ")    
//function for the attack or run
function IfOption(option) {
    if(option === "r"){
    let canEscape = CanRun(2)
    console.log(canEscape)
    walk
    } 
    else{
        //option == a
        console.log("attack function")
    }      
}

if(walk === "s"){
    console.log(playerInfo) //return playerstats
    walk = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ") 
         }
    
   while (walk ==="w") {
 let chance = EnemyAppearChance(2); //roll enemy encounter chance
    if (chance === 1){    //if enemies appear
    let enemy = EnemyListChoice(enemyList.name); //choose enemy
        if (enemy === [0]){  console.log("enemy0 eggs")
           console.log(enemyList[0].intro)
            option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
            IfOption(option)
            } 
        else if(enemy === [1]){console.log("enemy1 butter")
        console.log(enemyList[1].intro)
            option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
            IfOption(option)
            }
        else if(enemy === [2]){console.log("enemy2 sugar")
        console.log(enemyList[2].intro)
        option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
        IfOption(option)
        }
        else{ console.log("enemy3 flour")
        console.log(enemyList[3].intro)
        option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
        IfOption(option)
        }
    
    }
    else{   console.log("NO enemy")//enemies don't appear
    console.log("You continue your search for the perfect ingredients, but find nothing. ")
    walk = readLineSync.question("Enter 'w' to walk forward and continue your search or 's' to see your stats: ") 
  
    }
    if(walk === "s"){
        console.log(playerInfo) //return playerstats
        walk = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ") 
             }
}
return walk
}


if (gameOver == true){
    console.log("you died")
}

    