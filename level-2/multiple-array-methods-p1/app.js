// You should use multiple array methods to solve these problems. Don't use for loops!
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// Using the provided peopleArray,  write a function that:

//     Returns a list of everyone older than 18, which is
//     sorted alphabetically by last name, and where
//    ~~ each name and age is embedded in a string that looks like an HTML <li> element. ~~

// Example
let olderThan =[]
function sortedOfAge(arr){
 const result = arr.reduce(function(final,person){
    if(person.age > 18){
      final = olderThan.push("<li>"+ person.firstName + person.lastName + " is "+ person.age + "</li>")
   
    }
  olderThan.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1 )
    return olderThan
    },0) 

 return  result 
}

console.log(sortedOfAge(peopleArray));

/*
Output: 
[ 
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>" 
]
*/

// Extra Credit

//     Create another array of one or more individuals and add it to the original array.
//     Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
//     Remove the second individual from the array.
//     Return the array in reverse order.
