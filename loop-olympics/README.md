Preliminaries

    Write a for loop that prints to the console the numbers 0 through 9.
    Write a for loop that prints to the console 9 through 0.
    Write a for loop that prints these fruits to the console.
    var fruit = ["banana", "orange", "apple", "kiwi"]

Bronze Medal

    Write a for loop that will push the numbers 0 through 9 to an array.
    Write a for loop that prints to the console only even numbers 0 through 100.
    Write a for loop that will push every other fruit to an array.
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

Silver Medal

    Write a loop that will print out all the names of the people of the people array
    
    Write a loop that pushes the names into a names array, and the occupations into an occupations array.
    Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.

var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

Gold Medal - Nesting

    Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]

2.Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]

3.Create an array that mimics a grid like the following using nested for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]

    Given a grid like the previous ones, write a nested for loop that would change every number to an x.

var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...] 
