const form = document.addItem;

form.addEventListener('submit', function(event){	
    event.preventDefault(); 
    const newItem = form.newInput.value
    form.newInput.value = ""
    console.log(newItem) //logs the new input to console-check if went through
    
    //creates new li to the list
   const list = document.getElementById("list")
     var textnode = document.createTextNode(newItem)   
    list.appendChild(textnode);
     
    //adds the edit and X buttons to the list item
     var editBtn = document.createElement('button') 
     editBtn.innerText = "edit"
     editBtn.style.width = "40px"
     list.appendChild(editBtn)
     var xBtn = document.createElement('button') 
     xBtn.innerText = "X"
     xBtn.style.width = "25px"
     list.appendChild(xBtn)
                         
    //need to center buttons and add padding to new list item word

});
