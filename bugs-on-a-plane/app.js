const form = document.airlineForm;
//const submit = document.getElementByID(submit);
//var query = document.querySelector();

  

form.addEventListener('submit', function(event){
    event.preventDefault()
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    const location = form.travelLocation.value;
    let diet = [];

    //if form selection = 'vegan' , 'gluten-free', 'paleo', add to diet array
    if (form.vegan.checked == true) {
        diet.push(form.vegan.value);
    }
    if (form.gluten.checked == true) {
        diet.push(form.gluten.value);
    }
    if (form.paleo.checked == true) {
        diet.push(form.paleo.value);
    }

      
    //alert box 

    alert(`First Name:  ${firstName} \n Last Name:  ${lastName}  \n Age:   ${age} \n Gender:  ${gender}  \n Travel Location:  ${location} Diet: ${diet}  \n Awesome, now if you die, it won't be an accident..`)
  
});

