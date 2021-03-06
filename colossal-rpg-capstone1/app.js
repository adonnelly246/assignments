const readLineSync = require('readline-sync');
let hp = 100;
let enemyHp = 100;
// readLineSync.question("What will you do? Pres 'w' to walk or 's' to search for ingredients") 

//greet, get name and store it
console.log("~----The Ultimate Baking Showdown----~")
console.log("Greetings traveler! Welcome to the land of Crumbs, a magical place filled with evil ingredients that only the most acomplished bakers can beat into submission and make into delicious treats. In order to alowed entry into our capital city of Oreo Macadamia, you must first prove your worthyness in a baking competition, judged by none other than our queen bee, Marmalade Sugar Crumble. First things first, you need to register so your name can be placed on the roster for entry. What should we call you? ")
const name = readLineSync.question("Please enter your name: ") 

//ask to walk? 
const walk = readLineSync.question("To begin your journey, you must get the ingredients.In order to gather them, you must travel to the descolace known as 'The General Store' Enter 'w' to walk to your destination: ") 

while(walk = "w"){
 
//1/3 or 1/4 chance for enemy function/algorithim (random 3 min enemies)
const enemyList = ["Evil Eggs","Mutant Butter", "Monstrous Flour", "Rough Sugar"]
const enemy = enemyList[Math.floor(Math.random() * enemyList.length)];
const attack = Math.floor(Math.random)
let option = readLineSync.question("Enter Enter 'r' to run or 'a' to attack: ")

//if enemy appears --> user chooses to run or attack
if (enemy = enemyList[0]){
  console.log("You make your way forward, but a group of Evil Eggs ambushes you from behind!")
  option

}
else if(enemy = enemyList[1]){
   readLineSync.question("Enter Enter 'r' to run or 'a' to attack: ")
}
else if(enemyList === enemyList[2]){
 readLineSync.question("Enter Enter 'r' to run or 'a' to attack: ")
}
else{
 readLineSync.question("Enter Enter 'r' to run or 'a' to attack: ")
}

if(option = "a"){
//if ATTACk - random ammount of dmg min-max ---enemy attack rand ammount

}
else{
//if RUN - 50% chance of escape ---enemy attack rand ammount

}
}

//while loop player kills enemy = 50 HP + special item
while (hp > 0 && enemyHp <= 0){

}


//if defeat all 4 ingredients -> hp +100, grand prize (personal baker status)

//random enemy function

//random number function for hp

//function r6eturn 1 or 2 for 50/50 chance