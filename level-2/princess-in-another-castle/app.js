//what it is to be a player/all properties/what player does
class Player {
    gameActive = true
    constructor(name){
        this.name = name
        this.totalCoins = [0]
        this.status = "small"
        this.hasStar = false
       
    }
        //use namePicked to pass in "mario" or "luigi" //----------------------may not need/redundant
    //    setName(namePicked){
    //        if (namePicked=== "Mario"){
    //            this.name = "Mario"
    //        }
    //        else if(namePicked === "Luigi"){
    //         this.name = "Luigi"
    //        }
          
    //     }
        gotHit(){
                if (hasStar===true){
                    this.status = "BIG"
                }
                else{
                    this.status = "Dead"
                    this.gameActive = false
                    console.log("you died")
                }
        }
      gotPowerUp(){
            this.status = "Powered up"
            this.hasStar = true
            console.log("You got a Star!")
        }
       
     addCoin(){
            this.totalCoins = + 1
        }
      print() {console.log(`Name: ${this.name} \n Total Coins: ${this.totalCoins} \n Status:${this.status}`)}
 


}

// put the random range function inside a setInterval function that ends after gameActive === false
 
setInterval(() => {

    console.log("intervalstart")
  function randRange(min,max)  {
      let randNum = Math.floor(Math.random() * (max-min)+ min)
      return randNum  
  };
 
 let rand = randRange(0,3)
 console.log(rand)
  if (this.gameActive){
     if(rand === 0){
        gotHit()
        console.log("hit")
        setInterval()
     }
     else if(rand=== 1){
        gotPowerUp()
        console.log("powerup")
        setInterval()
     }
     if (rand === 2) {
        addCoin()
      console.log("coin+")
     } 
  }
     else if(this.gameActive === false){
         console.log("end")
     }
 
    
       
    //use class to create an object
 const player1 = new Player("Mario", "Luigi")
 const player2 = new Player ("Luigi")
 //call print method on object
 player2.print()         //-------------------------- setName
  
 }, 3000);




