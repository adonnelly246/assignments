const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send(body)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const response = xhr.responseText
        const returnVal = JSON.parse(response)
       console.log(returnVal.objects[0].pokemon)
        displayHtml(returnVal.objects[0].pokemon)
    }
  
}

function displayHtml(arr){
    for(let i = 0; i < arr.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent =arr[i].name
    document.body.appendChild(h1)
    }
}
