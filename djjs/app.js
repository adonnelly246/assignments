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

 var square = document.getElementsByClassName("square");
 
  square.addEventListener(MouseEvent, handleButtonClick(square)) //create function and add it here ("hover", handleButtonClick
  


//function that checks for certain mouse activity   should I use a case statement instead of if, else-if?
function handleButtonClick(_square){
  if (keydown(82) == true){//keydown r == true
    document.square.style.backgroundColor = "red"
  }
   else if (MouseEvent.hover == true){  //mouse hover
    document.square.style.backgroundColor = "blue"
   }
   else if(MouseEvent.rightClick== true){   //mouse button down
    document.square.style.backgroundColor = "red"
   }
   else if(MouseEvent.mouseUp== true){   //mouse button up
    document.square.style.backgroundColor = "yellow"
   }
   else if(MouseEvent.dblClick){   //mouse double clicked 
    document.square.style.backgroundColor = "green"
   }
   else if(MouseEvent.scroll== true){         //proper syntax/ use of scroll?
    document.style.backgroundColor = "orange"
   }
}

