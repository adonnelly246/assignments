const readLineSync = require('readline-sync');
let hp = 100;
let enemyHp = 200;
//greet, get name and store it
console.log("~----The Ultimate Baking Showdown----~")
const name = readLineSync.question("First things firs, you need to register for the baking competition. Please enter your name: ") 

//ask to walk? 
const walk = readLineSync.question("To begin your journey, you must get the ingredients. Enter 'w' to walk to your local General Store") 

//add a wait func

readLineSync.question("To begin your journey, you must get the ingredients. Enter 'w' to walk to your local General Store") 


//1/3 or 1/4 chance for enemy function/algorithim (random 3 min enemies)
 const enemyList = ["Evil Eggs","Mutant Butter", "Zombie Neighbor"]

//if enemy appears --> user chooses to run or attack
if (enemy){
  let option = readLineSync.question("Enter Enter 'r' to run or 'a' to attack")
}

if(option = "a"){
//if ATTACk - random ammount of dmg min-max ---enemy attack rand ammount
}
else{
//if RUN - 50% chance of escape ---enemy attack rand ammount

}


//while loop player kills enemy = HP + special item
while (hp > 0 && enemyHp <= 0){

}
//if player hp < = 0 console.log funny death message
if (hp <= 0){
    console.log(`You put up a good fight, ${name}, but it just wasn't enough, The , ${enemyList[i]} has won the fight, you have burned your cookies, and you have lost the competition`)
}

//random enemy function

//random number function for hp

//function r6eturn 1 or 2 for 50/50 chance