const addform = document.addform;
const subform = document.subform;
const multform = document.multform;
//when button is clicked, add html section to parent to show result of add, sub, or mult
addform.addEventListener('submit', function(event){
    event.preventDefault() 
    let result = document.createElement('p')
    result.setAttribute('id','result')
    
    let add = +addform.addOne.value + +addform.addTwo.value
   result.innerText = "Addition Result: "+ add

    
 document.getElementsByTagName("body")[0].append(result)     
 addform.addOne.value = "" 
addform.addTwo.value = "" 


})
subform.addEventListener('submit', function(event){
    event.preventDefault() 
    let result = document.createElement('p')
    result.setAttribute('id','result')

let sub =subform.subOne.value - subform.subTwo.value
result.innerText = "Subtraction Result: "+ sub

document.getElementsByTagName("body")[0].append(result)   
subform.subOne.value = "" 
subform.subTwo.value = "" 
})

multform.addEventListener('submit', function(event){
    event.preventDefault() 
    let result = document.createElement('div')
    result.setAttribute('id','result')
    
let mult = multform.multOne.value * multform.multTwo.value
result.innerText = "Multiplication Result: "+ mult
document.getElementsByTagName("body")[0].append(result)   
multform.multOne.value = "" 
multform.multTwo.value = "" 
})