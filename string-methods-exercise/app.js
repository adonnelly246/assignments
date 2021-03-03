
//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
CapAndLowerCase("hello");
function CapAndLowerCase(str){
    console.log(str.toUpperCase() + str.toLowerCase()) 
}

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
findMiddleIndex("hello");
function findMiddleIndex(str){
    var strA = str.split("")
    var strAHalf = strA.length / 2
   var num = Math.floor(strAHalf)
   console.log(num)
}

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(str){
    var strA = str.split("")
   halfStr = strA.length / 2
   var sliceStr = strA.slice(0, halfStr)
   console.log(sliceStr)
}

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.If your string length is odd, use Math.floor() to round down.
firstCapSecLower("hello world")
function firstCapSecLower (str){
    var strA = str.split("")
    var strLeng = strA.length
    var half = strLeng / 2

    if (strLeng % 2 !== 0){
      half= Math.floor(half)
    }
 
    var firstHalf = str.slice(0, half)
    var secHalf = str.slice(half, strLeng)
 
   console.log(firstHalf.toUpperCase() + secHalf.toLowerCase())
}

/*/Optional Code Challenge

(This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

Write a function that takes a string as a parameter and capitalizes any character that follows a space.

capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practic 
*/