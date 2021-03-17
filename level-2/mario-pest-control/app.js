const form = document.form;
let totalPrice= document.getElementById("total")
let totalText = total.innerText

form.addEventListener('submit', event =>{
    event.preventDefault()
    let goomba = form.goombas.value * 5
    let bobomb =form.bobm.value * 7
    let cheepcheep = form.cheep.value * 11
  let total=   goomba + bobomb + cheepcheep
 totalPrice.innerText =totalText + total

  form.goombas.value =""
  form.bobm.value =""
  form.cheep.value =""
});