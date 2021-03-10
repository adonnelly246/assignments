const readLineSync = require('readline-sync');
//need player dmg and attack, fix hp adding instead of subtracting after first iteration, push random item to inventory when defeat enemy + HP,  stay at enemy index until dead or player dead,(give different message on return to loop)  check dmg track(so far it's returning rand index form enemyList attack array-good) 

//greet, get name and store it
console.log("                                    ~----The Ultimate Baking Showdown----~     ")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Oreo Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 
let gameOver = false
//function for chance of enemy appearing
const EnemyAppearChance = max => Math.floor(Math.random() * Math.floor(max));

  //function for getting random enemy from enemy object
  function EnemyListChoice(...enemyList){
  return Math.floor(Math.random() * Math.floor(enemyList.length))
  }
  //function to randomly get run chance
    function CanRun(max, option){ 
        console.log(option)
        let canRun = Math.floor(Math.random() * Math.floor(max))
        if(canRun == 2){
        let escape = `You are unable to run away, ${name}, Prepare for an attack!`
        option ="a"
        console.log(option)
        return  escape
        //run enemy attack func
        }
        else{
         let escape = `You were able to escape, and continue walking forward.`
         option = "r"
         return escape
        } 
        
}
//function to keep track of dmg
function AttackDmg(enemyAttack){
 // Math.floor(Math.random() * Math.floor())
  let damage = enemyAttack[Math.floor(Math.random() * enemyAttack.length)];
  return damage;
} 

//random Item list array
const RandItemList = ["Bottle of Gold Standard Vannilla", "Perfectly Ripened Orange", "Jar of Royal Honey", " Jar of Plump Plum Preserves"]

//function to return random item 
function GetRandItem (RandItemList){
let randItem = Math.floor(Math.random() * Math.floor(RandItemList[i]))
playerInfo.inventory.push(randItem)
console.log(playerInfo)
}

//player object
let playerInfo = 
  { name: name,
    hp: 100,
    inventory: []} ; //when get item, push randItem to playerInfo.inventory


//enemies object
const enemyList = [
  { name: "Evil Eggs",
    enemyHp: 90,
    intro:  "You make your way forward, but a group of Evil Eggs ambushes you from behind!",
    attack: [1, 3, 2, 5]
  },
  { name: "Mutant Butter",
  enemyHp: 150,
  intro:  "When you walk forward, you catch a wild Mutant Butter off guard and it charges toward you",
  attack: [1, 5, 2, 10]
},
  {
    name: "Rough Sugar",
    enemyHp: 150,
    intro: "You move slowly, but a Rough Sugar Beast senses your presence and readies an attack",
    attack: [2, 10, 5, 20]
  },
  {
    name: "Monsterous Flour",
    enemyHp: 200,
    intro: "You search for what seems like miles, but you see no ingredients anywhere. You decide to rest before moving any further. Just as you sit down, you realise why the ingredients are scarce, but it is too late! The Monsterous Flour has already spotted you and begins its attack!",
    attack: [10, 20, 30, 40]
  }

]



//ask to walk or check stats 
console.log(`Excellent, ${name}! Let's get cookin'! To begin your journey, you must get the ingredients. In order to get all of the ones you need, you must travel to the descolace known as 'The General Store'`)
while (gameOver === false){
let walkOrStats = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ")    


//function for the attack or run
function RunOrAttk(option, enemy, hp, playerInfo) {
    if(option === "r"){
      let canEscape = CanRun(2,option)
      console.log(canEscape, "canRun output")
      walkOrStats = "0"   
      currentHP = currentHP
    } 
    else if (option === "a"){        //option == a
         let dmg = AttackDmg(enemyList[enemy].attack) //get random num from attack array of enemy
         console.log(`You take ${dmg} damage from the attack.`)
        let currentHP = hp - dmg
        hp = currentHP
         console.log(currentHP, "hp", hp, "<orig")
        return enemy, currentHP
    }      
}


if(walkOrStats== "s"){
    console.log(playerInfo) //return playerstats
    walkOrStats = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ") 
         }
    
 let chance = EnemyAppearChance(2); //roll enemy encounter chance
 while (walkOrStats ==="w"|| CanRun(max, option) === CanRun(2, "r")) {
    if (chance === 1){    //if enemies appear
    let enemy = EnemyListChoice(enemyList);  //choose random enemy from list 
    if (enemy === 0){ 
           console.log(enemyList[0].intro)
            option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
            RunOrAttk(option, enemy, playerInfo.hp)
            } 
        else if(enemy === 1){
        console.log(enemyList[1].intro)
            option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
            RunOrAttk(option, enemy, playerInfo.hp)
            }
        else if(enemy === 2){
        console.log(enemyList[2].intro)
        option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
        RunOrAttk(option, enemy, playerInfo.hp)
        }
        else{
        console.log(enemyList[3].intro)
        option = readLineSync.question(" Enter 'r' to run or 'a' to attack: ")
        RunOrAttk(option, enemy, playerInfo.hp)
        }
    
    }
    else{  //enemies don't appear
    console.log("You continue your search for the perfect ingredients, but find nothing. ")
    walkOrStats = readLineSync.question("Enter 'w' to walk forward and continue your search or 's' to see your stats: ") 
  
    }
    if(walkOrStats === "s"){
        console.log(playerInfo) //return playerstats
        walkOrStats = readLineSync.question("Enter 'w' to walk or 's' to see your inventory and stats: ") 
             }
}
return walk
}


if (hp <= 0){
  gameOver = true
}
else if(enemyHp <= 0){
  let randItem = GetRandItem(RandItemList)
 walkOrStats = readLineSync.question(`You have defeated the enemy and gain ${plusHP} back. You also gain a ${randItem}press 'w' to walk and continue your search or 's' to see your inventory and stats: `)
}
  
if (gameOver == true){
  console.log("you died")
}  