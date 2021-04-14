var count = 0
let current = document.getElementById("current")
let previous = document.getElementById("previous")
let timer = document.getElementById("timer")

document.getElementById("any").addEventListener('click', e =>{
  startTimer(1000,timer)
    count = parseInt(count) 
    count += 1
    current.textContent = "Current Number of Clicks: " + count
    //holds value on refresh
     localStorage.setItem(previous, count)

})

 
  previous.textContent = "Previous Number of Clicks: " + localStorage.getItem(previous)


//   function startTimer(duration, display) {
//     let stopWatch = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(stopWatch / 60, 10);
//         seconds = parseInt(stopWatch % 60, 10);

//         minutes = minutes < 1 ? "0" : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (stopWatch <= 0) {
//             stopWatch = duration;

//         }
//     }, 1001);
// }


 