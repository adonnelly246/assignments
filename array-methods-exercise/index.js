var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];



//Remove the last item from the vegetable array.
var removeLastVeg = vegetables.pop();
console.log(vegetables)

//Remove the first item from the fruit array.
var removeFirstFr = fruit.shift();
console.log(fruit)

//Find the index of "orange."
var indexOrg = fruit.indexOf("orange");
console.log(indexOrg)

//Add that number to the end of the fruit array.
fruit.splice(3, 0, indexOrg);
console.log(fruit)

//Use the length property to find the length of the vegetable array.
console.log(vegetables.length)

//Add that number to the end of the vegetable array.
vegetables.push(vegetables.length);
console.log(vegetables)
 
//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables); 
console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.
 food.splice( 4, 2);
console.log(food)

//Reverse your array.
    food.reverse();

// Turn the array into a string and return it.
console.log(food.join(" "));
