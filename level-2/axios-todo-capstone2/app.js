const form = document.form

function getData(){
    axios.get("https://api.vschool.io/adonnelly246/todo")
        .then(res => listData(res.data.title))
        .catch(err => alert(err))
}


function createTodo(todo){
    //insert todo into DOM 
       clearList()
           for(let i = 0; i < todo.length; i++){
               const li = document.createElement('li')
               li.textContent = todo[i].title
               document.getElementById('list').appendChild(li)
           }
       

       function clearList(){
           const el = document.getElementById('list')
           while(el.firstChild){
               el.removeChild(el.firstChild)
           }
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


    //add it to the database using axios.post and createTodo function
    axios.post("https://api.vschool.io/adonnelly246/todo", newItem)
    .then(response =>  createTodo())
    .catch(error => alert(error))             //show an alert when error occurs

    //use getData to display title on html
   getData()

   // use appendChild to add edit and delete buttons to each new li(for loop)
})

//each todo has checkbox to be marked compelte/incomplete(when checked, update database)
//axios.get(url/id) --find
//axios.put(url/id)  -update

// li.addEventListener('checked', event =>{

// })


//user can delete todos(separate from complete checked) / Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
//axios.delete  --delete






//extra credit edit Button --- axios.put("id", updatedInfo)
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disapear, and the new values will be displayed.


// Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.