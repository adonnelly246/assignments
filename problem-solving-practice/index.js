//Write a function that takes an array of numbers and returns the largest (without using Math.max())

largest([3, 5, 2, 8, 1]) // => 8

function largest([...array]){   // ...
    var maxNum = array[0];
for(let i = 0; i < array.length; i ++){
    //if current index value > value -- MaxNum = current inex value// try using .reduce()
    if (array[i] > maxNum) {
        maxNum = array[i];
      }
 
}
console.log(maxNum)
}

//Write a function that takes an array of words and a character and returns each word that has that character present.

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

function lettersWithStrings([...strArray], ...chars) {
    let newArray = []
    for(let i = 0; i < strArray.length; i++){ 
    if(strArray[i].includes(chars, -1)){  //if index value = char add value to newArray
      newArray.push(strArray[i]) 
    }
  
 }
console.log(newArray)
}


//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false

function isDivisible(num1, num2){
    if(num1 % num2 === 0){
        console.log("true")
    }
    else{
        console.log("false")
    }
}