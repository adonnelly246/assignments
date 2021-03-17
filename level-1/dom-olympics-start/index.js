var header = document.getElementById("header");

header.textContent = "JavaScript Made This!!"
header.style.fontWeight = "bold"

var clearBtn = document.getElementById('clear-button')
var messages = document.getElementById("messages")
//clear button
clearBtn.addEventListener('click',function (){
    messages.textContent = " "
});

 

var dropDown = document.getElementById("theme-drop-down")

 const lefts = document.getElementById("left");
 const rights = document.getElementById("right");
 
   //changes backgroundcolor based on dropdown choice
dropDown.addEventListener("change", function(){

    if(dropDown.value == "theme-two"){
    lefts.style.backgroundColor = "black"
    lefts.style.color = "white"
    rights.style.backgroundColor = "red"
    rights.style.color = "white"
    }
    else if(dropDown.value == "theme-three"){
        lefts.style.backgroundColor = "purple"
        rights.style.backgroundColor = "pink"
        lefts.style.color = "white"
        rights.style.color = "black"
    }
    else if(dropDown.value == "theme-four"){
        lefts.style.backgroundColor = "green"
        rights.style.backgroundColor = "blue"
        lefts.style.color = "black"
        rights.style.color = "white"
    }
    else if (dropDown.value == "theme-one"){
        lefts.style.backgroundColor = "burlywood"
        rights.style.backgroundColor = "lightblue"
        lefts.style.color = "black"
        rights.style.color = "black"
    }
  

});
   

//add more messages from input form and send button
const form = document.message
form.addEventListener('submit', function(event){
    event.preventDefault() 
   
    //create new div
    var newDiv = document.createElement('div')
    //get input typed into 
    newDiv.innerText =  form.input.value 
    newDiv.setAttribute('id', 'left')
    //add it to list
    messages.appendChild(newDiv) 

    form.input.value = "" 
});

