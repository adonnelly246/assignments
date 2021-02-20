/*You're starting your business as a strictly online DJ (DJ JS) and you want to start by creating a website where
 people can change the color of a square on the page by interacting with different HTML Events.

The square's color will change as follows:

    Blue when the mouse hovers over the square
    Red when the mouse button is held down over the square
    Yellow when the mouse button is let go over the square
    Green when the mouse is double clicked in the square
    Orange when the mouse scroll is used somewhere in the window (not just over the square).

You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example)
 and have the box change to that color. Check this site for a full list of keyboard key codes. https://css-tricks.com/snippets/javascript/javascript-keycodes/
  */

 var square = document.getElementById("square")
 var body = document.getElementById("body")
 //body.addEventListener(WheelEvent,  HandleMouseEvent(body))

 square.addEventListener("dblclick",  function(e)  {
 
  square.style.backgroundColor = "green"
});
 
square.addEventListener("mousedown",  function(e) {
 
  square.style.backgroundColor = "red"
});
 
square.addEventListener("mouseup",  function(e) {
 
  square.style.backgroundColor = "yellow"
});

body.addEventListener("wheel",  function(e)  { //mouse scroll
 
  square.style.backgroundColor = "orange"
});


 square.addEventListener('mouseover',  function(e){ //mouse hover blue
 
  square.style.backgroundColor = "blue"
});

  
