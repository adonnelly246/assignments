

forception()

function forception(people, alphabet){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]  
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
   alphabet = alphabet.toUpperCase()
    var alphabetArr = alphabet.split("") //turns alphabet into an arr
    var newARR = []
    for(i = 0; i < people.length; i++){
        for(j = 0; j< alphabetArr.length; j++){
        
        }
        newARR.push(people[i] +"," + " " + (alphabetArr)) 
        console.log(newARR)
    }
   
}

/*// Output: 
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]*/