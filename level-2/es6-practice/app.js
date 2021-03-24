// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

// John is the pet owner, and his name should be stored differently than the other names.

var name = "John"
var age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => (carrot.type = "carrot", carrot.name = carrot) )
    
}


console.log(mapVegetables(carrots))

// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly) 
}

console.log(filterForFriendly(people))

// Re-write the following functions to be arrow functions:
let doMathSum = (a, b) => a + b


let produceProduct = (a, b) =>  a * b


console.log(doMathSum(2,2))

console.log(produceProduct(2,3))


// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?

let printString = (firstName="Jane", lastName="Doe", age=100) =>(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)
console.log(printString())
console.log(printString("kat","Stark", 40))

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit
// Use template literals to build the string



// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

function filterForDogs(arr) {
    return arr.filter(animal => (animal.type ==="dog" ? true : false) )
    
}
console.log(filterForDogs(animals))