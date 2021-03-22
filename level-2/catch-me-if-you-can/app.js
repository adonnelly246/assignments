// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
  //check data types first and throw error
try{
  if(typeof x !== Number || typeof y !== Number){
      throw new Error
  }
}
catch(err){
    console.log("one or more numbers is Not of the data type 'number'")
  }
  return x + y;
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
sum("1","2")
// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try{
      if (username === user.username && password === user.password){
        console.log("login successful!")
      }
      else{
          throw new Error
      }
  }
  catch{
    console.log("username and password must match")
  }
}

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

login("me", "you")