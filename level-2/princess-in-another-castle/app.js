class Player {
    constructor(name, totalCoins,status,hasStar,setName,gotHit,gotPowerUp,gameActive,addCoin,print){
        name =""
        totalCoins =0
        status = new String("Powered Up", "BIG", "small", "Dead")
        hasStar = false
        gameActive = true
        let setName = function(namePicked){
            return namePicked
        }
        this.gotHit = function(){

        }
        this.gotPowerUp = function(){

        }
       
        let addCoin = function(){

        }
        let print = function(name,totalCoins, status){
            playerInfo = [
                this.status

            ]
        }
    }
}
//use class to create an object
const player = new Player()


// put the random range function inside a setInterval function that ends after gameActive === false
let timer = setInterval(() => {
    function randRange(value){
        //do rand math to value(0, 1,2)
        
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

