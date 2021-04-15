
const form = document.form
//axios.get(url/id) --find
function getData() {
    axios.get("https://api.vschool.io/adonnelly246/todo")
        .then(response => createTodo(response.data))
        .catch(err => alert(err))
}
getData()
//delete todo function          
const deleteFunc = function (li, todo) {
    axios.delete("https://api.vschool.io/adonnelly246/todo/" + todo._id)
        .then(response => alert(`${todo.title} successfully deleted!`))
        .catch(error => alert(error))
    li.remove()
}
//checkbox function
const checkboxFunc = function (itemId, todoObject) {
    //let todoObject = {
    //    completed: true 
    //}
    axios.put("https://api.vschool.io/adonnelly246/todo/" + itemId, todoObject)
        //.then(response =>{
        //alert(`${todo.title} completed!`)
        //}) 
        .then(res => console.log(res.data), alert(`${todoObject.title} completed!`))
        .catch(error => alert(error))
}

//edit button function
const editFunc = function (todo, updatedInfo, itemId) {
    console.log(updatedInfo)
    let updtTodo = {
        title: updatedInfo
    }
    axios.put("https://api.vschool.io/adonnelly246/todo/" + itemId, updtTodo)
        .then(response => alert(`${todo} updated to ${updtTodo}!`))
        .catch(error => alert(error))
}

//clears list on page 
function clearList() {
    const elemnt = document.getElementById('list')
    while (elemnt.firstChild) {
        elemnt.removeChild(elemnt.firstChild)
    }
}

//creates html elements
function createTodo(todo) {
    for (let i = 0; i < todo.length; i++) {
        const todoId = todo[i]._id
        const li = document.createElement('li')
        li.setAttribute('id', 'li')
        li.textContent = todo[i].title
        document.getElementById('list').appendChild(li)

        // use appendChild to add checkbox, edit, and delete buttons to each new li
        const check = document.createElement('input')
        check.type = 'checkbox'
        check.setAttribute('id', 'check')
        li.appendChild(check)
        li.classList.add(`.li${todo[i]._id}`)
        if (todo[i].completed) {
            li.style.textDecoration = "line-through"
        }
        else {
            li.style.textDecoration = "none"
        }
        check.classList.add(`check${todo[i]._id}`)
        const selectedCheck = document.querySelector(`.check${todo[i]._id}`)

        selectedCheck.addEventListener('click', e => {
            if (todo[i].completed === true) {

                const selectedCheck = document.querySelector(`.check${todo[i]._id}`)

                let checked = {
                    completed: false
                }
                checkboxFunc(todoId, checked)
                li.style.textDecoration = "none"
                return selectedCheck.checked = false
            }
            else if (todo[i].completed === false) {
                const selectedCheck = document.querySelector(`.check${todo[i]._id}`)
                let notChecked = {
                    completed: true
                }

                checkboxFunc(todoId, notChecked)
                li.style.textDecoration = "line-through"
                return selectedCheck.checked = true
            }

        })
        const delBtn = document.createElement('button')
        delBtn.textContent = "X"
        delBtn.setAttribute('id', 'delete')
        li.appendChild(delBtn)

        delBtn.addEventListener('click', e => {
            const item = delBtn.parentElement
            deleteFunc(item, todo[i])
        })
        //extra credit edit Button --- axios.put("id", updatedInfo)
        // When clicked, the info will change to input boxes that are autofilled with the old Todo data
        // A user can change the value of these inputs
        // When the "edit" button is clicked, it will change to a "save" button.
        // When "save" is clicked, the form will disapear, and the new values will be displayed.
        const editBtn = document.createElement('button')
        editBtn.textContent = "Edit"
        editBtn.setAttribute('id', 'edit')
        li.appendChild(editBtn)

        editBtn.addEventListener('click', e => {
            let todoTitle = editBtn.parentElement.textContent
            console.log(todoTitle)

            editBtn.parentElement.contentEditable = true
            editBtn.textContent = "Save"

            editBtn.addEventListener('click', e => {
                editBtn.parentElement.contentEditable = false
                editBtn.textContent = "Edit"
                let updatedTitle = editBtn.parentElement.textContent

                console.log(updatedTitle)
                editFunc(todo[i], updatedTitle, todoId)

            })

        })

    }
}

//eventlistener for submit button
form.addEventListener('submit', function (e) {
    e.preventDefault()
    clearList()
    //get user input and store it
    const newItem = {
        title: form.title.value,
        price: form.price.value,
        decription: form.description.value,
        imgUrl: form.image.value
    }

    //clear form after submit
    form.title.value = ""
    form.price.value = ""
    form.description.value = ""
    form.image.value = ""


    //add input to the database using axios.post 
    axios.post("https://api.vschool.io/adonnelly246/todo", newItem)
        .then(response => getData())
        .catch(error => alert(error))



})









