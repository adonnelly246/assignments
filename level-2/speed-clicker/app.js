var count = 0
let current = document.getElementById("current")
let previous = document.getElementById("previous")
let timer = document.getElementById("timer")
document.getElementById("any").addEventListener('click', e =>{
 
    count = parseInt(count) 
    count += 1
    current.textContent = "Current Number of Clicks: " + count
    //holds value on refresh
  localStorage.setItem(previous, count)

})

 
  previous.textContent = "Previous Number of Clicks: " + localStorage.getItem(previous)


  //bonus add timer
  setInterval(()=>{
    //get timeLeft

    //display the timer counting down
    timer.textContent = timer.textContent + timeLeft
}, 10000)