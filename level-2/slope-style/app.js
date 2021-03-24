
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus") )
// ["dog", "cat", "mouse", "jackolope", "platypus"]



// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {
      fruit,
      sweets,
      vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
)
//  =>{
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }



// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location,duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:

let returnFirst=(items => items[0]) /*change this line to be es6*/


let itemArr = ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(returnFirst(itemArr))


// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = arr[0]
    let secondFav = arr[1]
    let thirdFav = arr[2]
    return (`My top three favorite activities are, ${firstFav},  ${secondFav}, and ${thirdFav}`)
}

console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

let combineAnimals = ((arr1, arr2, arr3, ...arrays ) => arrays.concat(arr1,arr2,arr3))

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus]



// Try to make the following function more ES6xy:

function product(...numbers) {  
  return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1,2,2,10,5,6))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

let unshift = (array, ...items) => items.concat(...array)

console.log(unshift(realAnimals, "a", "b", "c", 1,2,3))


// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]