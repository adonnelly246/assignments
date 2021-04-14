//what it is to be a player/all properties/what player does
class Player {
    gameActive = true
    constructor(name){
        this.name = name
        this.totalCoins 
        this.status = "small"
        this.hasStar = false
       
    }
        //use namePicked to pass in "mario" or "luigi" 
       setName(namePicked){
        this.name = namePicked
        }
        gotHit(){
                if (this.hasStar===true){
                    console.log("Enemy has been killed")
                   this.status = "BIG"
                    this.hasStar = false
                }
                else{
                    console.log("you died")
                   this.status = "Dead"
                    this.gameActive = false
                    
                }
        }
      gotPowerUp(){
        console.log("You got a Star!")
          this.status = "Powered up"
            this.hasStar = true
            
        }
       
     addCoin(totalCoins){
        console.log("coin+")
      totalCoins=  this.totalCoins += 1
        
        }

      print(){console.log(`Name: ${this.name} \n Total Coins: ${this.totalCoins} \n Status:${this.status}`)}
 
}

// put the random range function inside a setInterval function that ends after gameActive === false
let intervalFunc = setInterval(() => {

    //use class to create an object
    let player1 = new Player("Mario")
    // let player2 = new Player("Luigi")
    
 //call print method on object
 player1.print()    
 // player2.print()

  function randRange(min,max)  {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(player1.gameActive === true){
    let rand = randRange(0,3)
     if(rand === 0){
        player1.gotHit()
     }
     else if(rand=== 1){
        player1.gotPowerUp()
     }
     else if (rand === 2) {
        player1.addCoin(player1.totalCoins)
    
     } 
  }

  if(player1.gameActive === false){
        //interval stops
        clearInterval(intervalFunc)
     }
         
     
 }, 5000);



