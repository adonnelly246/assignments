//what it is to be a player/all properties/what player does
class Player {
    constructor(name, totalCoins,status,hasStar,setName){
        this.name = name
        this.totalCoins = totalCoins
        // this.status = ["Powered Up", "BIG", "small", "Dead"]
        this.hasStar = hasStar
        gameActive = true
        playerInfo = [
            name = this.name,
            status = this.status,
            totalCoins = this.totalCoins
        ]
       const setName = namePicked =>{
            this.name = namePicked
            return namePicked
        };
        gotHit = (status,hasStar) =>{
                if (hasStar){
                    this.status = "Powered up"
                }
                else{
                    this.status = "Dead"
                    gameActive = false
                }
        };
        gotPowerUp = status =>{
            this.status = "Powered up"
        };
       
        addCoin = totalCoins =>{
            this.totalCoins +=1
        };
        print= playerInfo=> console.log(`Name: ${playerInfo.name} Total Coins: ${playerInfo.totalCoins} Status:${playerInfo.status}`)
    }
}
//use class to create an object
const player1 = new Player("Mario", 0, "small", false, "Mario")


// put the random range function inside a setInterval function that ends after gameActive === false
const randTime = setInterval(() => {
    function randRange(min,max){
        //do rand math 
        
        if(value === 0){
            gotHit()
        }
        else if(value === 1){
            gotPowerUp()
        }
        else {
            addCoin()
        }
        }
}, gameActive ===false);


//call print method on object
Player.print(player)



