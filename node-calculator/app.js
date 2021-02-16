const readLineSync = require('readline-sync')

var num1 = readLineSync.question("Please enter your first number: ") 
//store num1
console.log(num1)
var num2 = readLineSync.question("Please enter your second number: ")  
//store num2
console.log(num2)
var op = readLineSync.question("Please enter the operation to perform: add, sub, mul, div: ") 
//store operation
console.log(op)

if (op == "add"){

    console.log("The result is: " + AddNums(num1, num2))
}
else if(op == "sub"){
    console.log("The result is: " + SubNums(num1, num2))
}
else if(op == "mul"){
    console.log("The result is: " + MultNums(num1, num2))
}
else if(op == "div"){
    console.log("The result is: " + DivNums(num1, num2))
}
else{
    console.log("Please enter one of the following: add, sub, mul, or div: ")
};


function AddNums(num1, num2){
    return( +num1 + +num2);
   
};

function MultNums(num1,num2){
    return(num1 * num2)
};

function DivNums(num1,num2){
    return(num1 / num2)
};

function SubNums(num1,num2){
    return(num1 - num2)
};

