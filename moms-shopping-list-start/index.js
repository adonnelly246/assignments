const form = document.addItem;

form.addEventListener('submit', function(event){	
    event.preventDefault() 
    
   

    //create new li from input and add to the list
    const list = document.getElementById("list")
    var newLi = document.createElement('li')     //create new lie
    var newDiv = document.createElement('div')  //create new div
    newLi.setAttribute('id','newItem')
    list.appendChild(newLi)     //add the new li to list
    newLi.appendChild(newDiv)   //add div to the new li
    newDiv.innerText =  form.input.value 

    //add the edit and X buttons to the list item
     var editBtn = document.createElement('button') 
     editBtn.setAttribute('id','editBtn')
     editBtn.innerText = "edit"
     newLi.appendChild(editBtn)

     var xBtn = document.createElement('button') 
     xBtn.setAttribute('id','xBtn')
     xBtn.innerText = "X"
     newLi.appendChild(xBtn)

     form.input.value = "" //clear form after submit  

   
});


//X button function

//adeventlistener for onclick

//remove text and buttons of the list item next to it

