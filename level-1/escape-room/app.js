const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(name)


var hasKey = false;

while(hasKey == false || option == 2){
    var option = readline.question("Enter the number for your choice: 1.Put hand in hole / 2.Find the key, / 3.Open the door  ");
console.log(option)


if (option == 1){
   
 console.log("You have DIED: As you reach your hand into the hole, you feel a sharp pain prick your arm. When you pull your hand back, a venomous snake slithers out from the crevice. Your entire body goes numb and you fall into a coma and DIE. Farewell, " + name + " you will be missed.")
 break;
}

else if (option == 2){
    hasKey = true
 console.log("Success, " + name,"! You now have the key!")
}

else if (option == 3 && hasKey == false){
    hasKey = false
    console.log("The Door is locked " + name + " try something else.")
}
else if (hasKey = true && option == 3){
    hasKey = true
    console.log("Congratulations, "+ name + ", You WIN! With the key in hand, you are able to unlock the door and escape!");
    break;
}

}
                   

