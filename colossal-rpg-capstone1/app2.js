const readLineSync = require('readline-sync');
//when enemy dies needs to return one item from the array(returns index), also make sure to filter out enemy once dead, may not need getRandomItem function

//greet, get name and store it
console.log("                                    ~----The Ultimate Baking Showdown----~     ")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Oreo Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 
console.log(`Excellent, ${name}! Let's get cookin'! To begin your journey, you must get the ingredients. In order to get all of the ones you need, you must travel to the descolace known as 'The General Store'`)

//creating your random number generator

const randomNumber = function (max,min){
    return Math.floor((Math.random() * max )+ min)
    }


//player object
let playerInfo = 
{ name: name,
  hp: 100,
  inventory: [],
  maxAttack: randomNumber(35, 1),
  minAttack: randomNumber(15, 1)
} ; 


const getRandItem = function(items){
   items = []   
 random = randomNumber(4, 0)
        //use randnum and return the item chosen (slice/splice array and return)
    
}
const createEnemy1 =  function(num, hp, name, intro) {
   return { 
    id: num,
    name: name,
    hp: hp,
    intro: intro,
    maxAttack: randomNumber(25, 1),
    minAttack: randomNumber(10, 1)
  
    }
}
  
  const RandItemList = ["Bottle of Gold Standard Vannilla", "Perfectly Ripened Orange", "Jar of Royal Honey", " Jar of Plump Plum Preserves"]

//array and pass through enemies, and intro
const EnemyList = [createEnemy1(1, 150, "Mutant Butter",  "When you walk forward, you catch a wild Mutant Butter off guard and it charges toward you!"), createEnemy1(2, 90, "Evil Eggs", "You make your way forward, but a group of Evil Eggs ambushes you from behind!"), createEnemy1(3, 150,"Rough Sugar",  "You move slowly, but a Rough Sugar Beast senses your presence and readies an attack"), createEnemy1(4, 200, " Monsterous Flour", "You search for what seems like miles, but you see no ingredients anywhere. You decide to rest before moving any further. Just as you sit down, you realise why the ingredients are scarce, but it is too late! The Monsterous Flour has already spotted you and begins its attack!")]


while(EnemyList.length > 0 && playerInfo.hp > 0){
    const walkORStats = readLineSync.keyIn('Hit w to walk or hit s to check inventory and stats: ', {limit: ['w','s'] }); 
    if(walkORStats === "w"){

        //1in 3 chance for enemy
        if( Math.floor(Math.random()* 100)< 33 ){ //enemies appear
            let enemy = EnemyList[randomNumber(EnemyList.length, 0)]
            console.log(enemy.intro)
            
           while(playerInfo.hp > 0 && enemy.hp > 0){
               let option = readLineSync.keyIn(`Hit 'a' to attack, 'r' to run  or 's' to check stats and inventory: `, {limit: ['a','r', 's'] })
                 if (option === "a") {
                       //damage to enemy
                     const damageDeltToEnemy = randomNumber(playerInfo.maxAttack, playerInfo.minAttack)
                        //enemy hp = enemyhp - damDelt
                     enemy.hp -= damageDeltToEnemy
                     console.log(`You attack the enemy for ${damageDeltToEnemy} points of damage`)
                        console.log(enemy.hp)
                        //damage to player
                     const damageDeltToPlayer = randomNumber(enemy.maxAttack,enemy.minAttack)
                     playerInfo.hp -= damageDeltToPlayer
                     console.log(`The enemy attacks you for ${damageDeltToPlayer} points of damage`)
                     console.log(playerInfo.hp)
                    //filter out enemy after hp= 0 .filter
                 }  
                 else if(option === "s"){ 
                    console.log(playerInfo) //return playerstats
                 }
            else if(option === "r"){ // === "r"
            //randnumGen 50/50
            let canRun = Math.floor(Math.random() * Math.floor(2))
                if (canRun < 2){
                console.log (`You are unable to run away, ${name}, Prepare for an attack!`)
                }
                else{
                 console.log(`You were able to escape! Continue walking forward.`)
                 }
            } 
                if(enemy.hp <= 0 && playerInfo.hp >= 0){  
                let plusHP = playerInfo.hp + 50      
                let randItem = randomNumber(RandItemList.length, 0 )
                console.log(`You have defeated the enemy and gain ${plusHP}points of hp back. You also gain a ${randItem[i]} `)
                }
                else if(playerInfo.hp <= 0){
                    console.log(`How unfortunate, ${name}, you have died! Too bad no one will know what delicious treat you were going to make`)
                } 
            }
           
        }
        else{ //enemies don't appear
            console.log("You continue your search for the perfect ingredients, but find nothing. ")
        }
    }
    else if(walkORStats === "s" || option === "s"){ 
        console.log(playerInfo) //return playerstats
    }
 
}

