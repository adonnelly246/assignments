
//adds the next element on page using createsubitem
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
 
//creates dropdown menu for the color selection
function createDropDown(Colors){
var dropDown = document.createElement("select");
var Colors = [ "red", "blue", "green"];

    //loops through the Colors arr and adds dropdown choices
    for ( var i = 0; i < Colors.length; i++){
        var col = Colors[i];
        var option = document.createElement("option") 
        option.textContent = col;
        option.value = col;
        dropDown.append(option);   
       
        dropDown.addEventListener("change", function(e){
            //changes backgroundcolor based on dropdown choice
            subItem.style.backgroundColor = e.target.value
     })
    }
    return dropDown  
}

//creates subitem
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem   
}
});






