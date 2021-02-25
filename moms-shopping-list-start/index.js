const form = document.addItem;

form.addEventListener('submit', function(event){	
    event.preventDefault(); 
    const newItem = form.newInput.value
    form.newInput.value = ""

    console.log(newItem)
});
