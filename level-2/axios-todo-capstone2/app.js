const form = document.form
//axios.get(url/id) --find
function getData(){
    axios.get("https://api.vschool.io/adonnelly246/todo")
        .then(response => createTodo(response.data))
        .catch(err => alert(err))
        clearList() 
}

//creates html elements
function createTodo(todo){         
   
           for(let i = 0; i < todo.length; i++){
               const li = document.createElement('li')
               li.textContent = todo[i].title
               document.getElementById('list').appendChild(li)
                
               // use appendChild to add checkbox, edit, and delete buttons to each new li
               const check = document.createElement('input')
               check.type = 'checkbox'
               check.name =todo[i].title
               check.setAttribute('id','check')
               li.appendChild(check)
              
               const editBtn = document.createElement('button')
               editBtn.textContent = "Edit"
               editBtn.setAttribute('id','edit')
               li.appendChild(editBtn)  
           }
 }

  //clears list on page 
 function clearList(){
    const elemnt = document.getElementById('list')
    while(elemnt.firstChild){
        elemnt.removeChild(elemnt.firstChild)
    }
}

form.addEventListener('submit', function (e){
    e.preventDefault()
    //get user input and store it
    const newItem = {
        title: form.title.value,
        price: form.price.value,
        decription: form.description.value,
        imgUrl: form.image.value
        }
    //clear form after submit
   form.title.value =""
   form.price.value =""
   form.description.value =""
   form.image.value =""

   //use getData to display title on html
  
   getData()
  
    //add it to the database using axios.post and createTodo function
    axios.post("https://api.vschool.io/adonnelly246/todo", newItem)
    .then(response =>  createTodo(response))
    .catch(error => alert(error + "eventListener errPost"))             //show an alert when error occurs
   
})

//each todo has checkbox to be marked compelte/incomplete(when checked, update database)
//axios.put(url/id)  -update

// check.addEventListener('checked', event =>{
//         //when checked, change completed to 'true'
//        axios.put("https://api.vschool.io/adonnelly246/todo/<li id>")
//      .then(response => id.completed = true)
//    .catch(error => alert(error))
// })


//user can delete todos(separate from complete checked) / Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
//axios.delete  --delete






//extra credit edit Button --- axios.put("id", updatedInfo)
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disapear, and the new values will be displayed.


// Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.