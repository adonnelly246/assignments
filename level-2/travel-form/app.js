const form = document.form;



form.addEventListener('submit', event =>{
    event.preventDefault()
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let diet = [];

    //form selection
    if (form.vegan.checked == true) {
        diet.push(form.vegan.value);
    }
    if (form.gluten.checked == true) {
        diet.push(form.gluten.value);
    }
    if (form.carnivore.checked == true) {
        diet.push(form.carnivore.value);
    }

  
    //alert box 
    alert(` \n We only fly to one location. No refunds. If you don't show up for your flight, we take you anyway! \n Travel Location:  Bermuda Triangle First Name:  ${firstName} \n Last Name:  ${lastName}  \n Age:   ${age} \n Gender:  ${gender}  Diet: ${diet}`)
  
    form.lastName.value = "" 
    form.firstName.value = "" 
    form.age.value = "" 
});