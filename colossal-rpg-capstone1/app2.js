const readLineSync = require('readline-sync');
//---could filter out items so that player doesn't get the same one twice

//greet, get name and store it
console.log("                                    ~----The Ultimate Baking Showdown----~     ")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 
console.log(`Excellent, ${name}! Let's get cookin'! To begin your journey, you must get the ingredients. In order to get all of the ones you need, you must travel to the descolace known as 'The General Store'`)

//creating your random number generator

const randomNumber = function (max,min){
    return Math.floor((Math.random() * max )+ min)
    }


//player object
let playerInfo = 
{ name: name,
  hp: 1200,
  inventory: [],
  maxAttack: randomNumber(35, 1),
  minAttack: randomNumber(15, 1)
}  

// const createRandItemList =  function(num, name) {
//     return { 
//      id: num,
//      name: name,
//      }
//  }
 function getRandItem(itemList){
 let itemIndex = randomNumber(4, 1)
 let item = itemList[itemIndex]
  return item
}
const createEnemy1 =  function(num, hp, name, intro) {
   return { 
    id: num,
    name: name,
    hp: hp,
    intro: intro,
    maxAttack: randomNumber(20, 1),
    minAttack: randomNumber(10, 1)
  
    }
}


 let RandItemList = [" Bottle of Gold Standard Vannilla", " Perfectly Ripened Orange", " Jar of Royal Honey", " Jar of Plump Plum Preserves"]
//   let RandItemList = [createRandItemList(1, " Bottle of Gold Standard Vannilla"), createRandItemList(2, " Perfectly Ripened Orange"), createRandItemList(3, "Jar of Royal Honey" ), createRandItemList(4, " Jar of Plump Plum Preserves")]

//array and pass through enemies, and intro
let EnemyList = [createEnemy1(1, 100, "Mutant Butter",  "When you walk forward, you catch a wild Mutant Butter off guard and it charges toward you!"), createEnemy1(2, 80, "Evil Eggs", "You make your way forward, but a pack of Evil Eggs ambushes you from behind!"), createEnemy1(3, 150,"Rough Sugar",  "You move slowly through the desolace to avoid being noticed, but a Rough Sugar Beast senses your presence and readies an attack!"), createEnemy1(4, 180, " Monstrous Flour", "You search for what seems like miles, but you don't encounter any ingredients. You decide to rest before moving any further. Just as you sit down, you feel the ground beneath you shake. You understand why the ingredients are scarce, but it is too late; the Monstrous Flour has already spotted you and begins its attack!")]



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
                     //player hp =playerhp - damDelt
                     playerInfo.hp -= damageDeltToPlayer
                     console.log(`The enemy attacks you for ${damageDeltToPlayer} points of damage`)
                     console.log("You now have " + playerInfo.hp + " hp.")

                 }  
                 else if(option === "s"){ 
                    console.log(`Name: ${playerInfo.name}, Hp: ${playerInfo.hp}, Inventory: ${playerInfo.inventory}`) //return playerstats
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
            }
            
            if(enemy.hp <= 0 && playerInfo.hp >= 0){  
                 playerInfo.hp + 50    
                 let randItem = getRandItem(RandItemList)
                 playerInfo.inventory.push(randItem)
                console.log(`Wonderful job, ${name}! You have defeated the enemy and gain 50 hp. `)
                console.log(`You also gain a ${randItem}`)
                // //filter out items
                // RandItemList = RandItemList.filter(function(randItem){
                //     return randItem !== RandItemList
                //     })  
                //     if(RandItemList.length === 0){
                //         playerInfo.hp + 50
                //         console.log("You have all of the special items! You gain an additional 50 hp")
                //     }
                
                

                //filter out enemy after hp= 0 
                 EnemyList = EnemyList.filter(function(enemy){
                 return enemy.hp > 0
                 })  
                if( EnemyList.length === 0) {
                    console.log("                                    ~----You Have Gathered all of the Ingredients----~     ")
                    console.log("You make your way to the competition area and bake the most delicious treats from the corpses of the monster ingredients. Queen Marmalade carefully tatses all of the competitors' creations and crowns you the winner.")
                    console.log(`Congratulations, ${name}! You are now a citizen of Macadamia and one of the best bakers we have seen!`)
                    break;
                }  
            }
            else if(playerInfo.hp <= 0){
                console.log(`How unfortunate, ${name}, you have died! Too bad no one will know what delicious treat you were going to make with the corpses of the monster ingredients. `)
            }   
        }
        else{ //enemies don't appear
            console.log("You continue your search for the perfect ingredients, but find nothing. ")
        }
    }
    else if(walkORStats === "s" || option === "s"){ 
        console.log(`Name: ${playerInfo.name}, Hp: ${playerInfo.hp}, Inventory: ${playerInfo.inventory}`) //return playerstats
    }

    
 
}


