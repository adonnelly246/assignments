
var list = document.getElementById("list");

//const main = document.getElementsByClassName("main");
//adds the next element on page using createsubitem
document.getElementById("add").addEventListener("click", function(e){
    var input = document.getElementById("input");
 

    const userInput = input.innerHTML;

    
    const subItem = createSubItem(inputVal)
    document.getElementById("list").appendChild(subItem)
});

//creates dropdown menu for the color selection
function createDropDown(Colors){
    var dropDown = document.createElement("select");
    var Colors = ["Select a Color", "red", "blue", "green"];
    
    //loops through the Colors arr 
    for ( var i = 0; i < Colors.length; i++){
        var col = Colors[i];
        var option = document.createElement("option") 
        option.textContent = col;
        option.value = col;
        dropDown.append(option);
    }
    
    dropDown.addEventListener("onchange", function(e){
       
    })
    return dropDown
}

//creates subitem
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")

    return subItem

    
}


