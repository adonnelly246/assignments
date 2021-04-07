
const form = document.form
//axios.get(url/id) --find
function getData(){
    clearList()
    axios.get("https://api.vschool.io/adonnelly246/todo")
        .then(response => createTodo(response.data))
        .catch(err => alert(err))    
}
//delete todo function          
const deleteFunc = function(li,todo){
    axios.delete("https://api.vschool.io/adonnelly246/todo/" + todo._id)
    .then(response => alert(`${todo.title} successfully deleted!`))
    .catch(error => alert(error))
    li.remove()
}
//checkbox function
const updateFunc = function(todo){
    let todoObject = {
        completed: true 
    }
    axios.put("https://api.vschool.io/adonnelly246/todo/" + todo._id, todoObject) 
    .then(response =>{
    alert(`${todo.title} completed!`)
    }) 
    .catch(error => alert(error))
}

//edit button function
const editFunc = function(todo,updatedInfo){
    let updtTodo ={
        title: updatedInfo
    }
    axios.put("https://api.vschool.io/adonnelly246/todo/" + todo._id, updtTodo)
    .then(response => alert("Todo updated!"))
    .catch(error => alert(error))
}

  //clears list on page 
 function clearList(){
    const elemnt = document.getElementById('list')
    while(elemnt.firstChild){
        elemnt.removeChild(elemnt.firstChild)
    }
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
               check.setAttribute('id','check')
               li.appendChild(check)
              
               check.addEventListener('click', e =>{
                  
                if(check.checked){   
                updateFunc(todo[i])
                }
                   else if(check.checked === false){
                       let notChecked ={
                           completed: false
                       }
                       todo[i].completed = notChecked
                        console.log("not checked")
                   }
             })
             const delBtn = document.createElement('button')
             delBtn.textContent = "X"
             delBtn.setAttribute('id','delete')
             li.appendChild(delBtn)
             
             delBtn.addEventListener('click', e =>{
                 const item = delBtn.parentElement
                deleteFunc(item,todo[i])
              })
//extra credit edit Button --- axios.put("id", updatedInfo)
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disapear, and the new values will be displayed.
               const editBtn = document.createElement('button')
               editBtn.textContent = "Edit"
               editBtn.setAttribute('id','edit')
               li.appendChild(editBtn)  

               editBtn.addEventListener('click', e =>{
                editBtn.parentElement.contentEditable = true
                editBtn.textContent = "Save"        //create a save button instead so that can change the info to input boxes
              
                editBtn.addEventListener('click', e=>{
                 editBtn.parentElement.contentEditable = false
                 editBtn.textContent = "Edit"
                 editFunc(todo[i],todo[i].textContent) 
                })
                      
               })

              

            }
}           
 
//eventlistener for submit button
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
    .catch(error => alert(error))             
   
    
})









