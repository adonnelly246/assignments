//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    const result = arr.map(num => num *2)
   return result
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//2) Take an array of numbers and make them strings

function stringItUp(arr){
 const string = arr.map(num => num.toString())
 return string
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3) Capitalize each of an array of names
function capitalizeNames(arr){
  const capital = arr.map(str => str[0].toUpperCase() + str.substring(1).toLowerCase())
  return capital
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4) Make an array of strings of the names
function namesOnly(arr){
  const names = arr.map(arr => arr.name)
  return names
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
  const matrix = arr.map(function(arr){
      if(arr.age < 18){
          return arr.name + " is under age!!"
      }
      else{
          return arr.name + " can go to the Matrix"
      }
  })
  return matrix
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kayne West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]

//6) Make an array of the names in h1s, and the ages in h2s
const body = document.getElementsByTagName("body")
function readyToPutInTheDOM(arr){
  const headings = arr.map(function(arr){
      const h1 = body.createElement("h1")
      const h2 = body.createElement("h2")
        h1.texContent = arr.name
        h2.texContent = arr.age
  })
  return headings
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Paris Hilton</h1><h2>5</h2>", 
// // "<h1>Kayne West</h1><h2>16</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]