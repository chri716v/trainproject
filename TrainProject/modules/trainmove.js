class TrainMoving {

    
    constructor() {
        console.log("hello")
        this.trainPosition = document.querySelector('#trainPosition');
        this.message = document.querySelector("#msg");
        this.trainPositionTwo = document.querySelector('#trainPositiontwo');
        this.messagetwo = document.querySelector("#msg");
        this.startBtn = document.querySelector('.start-train');
        this.resetBtn = document.querySelector('.reset-train');
        this.startBtnTwo = document.querySelector('.start-train-two');
        this.resetBtnTwo = document.querySelector('.reset-train-two');
        this.stations = []
        this.direction = "down";
        this.fetchTrainData();
        this.startTrain();
        this.stopTrain();

        this.directiontwo = "up";
        this.startTrainTwo();
        this.stopTrainTwo();
    }

    fetchTrainData(){
        fetch("trainDB.json")
        .then((res) => res.json())
        .then((data) => {
            this.stations = data;
        })
        console.log(this.stations);
    }
    startTrain() {
        this.startBtn.addEventListener("click", () => {
            this.trainMovement(true)
        })
    }

    stopTrain() {
       this.resetBtn.addEventListener("click", () => {
          this.trainMovement(false)
       })
   }

    trainMovement(ride) {

        let y = this.trainPosition.offsetTop;
        let x = this.trainPosition.offsetLeft;
        this.message = "X: " + x + " Y : " + y
        if (ride) {
            this.myTime = setInterval(() => {
                this.speedAndDistance()
            }, 50);
        } else {
            clearInterval(this.myTime)
           
        }
    }
    startTrainTwo(){
        this.startBtnTwo.addEventListener("click", () => {
            this.trainMovementTrainTwo(true)
        })
    }
    stopTrainTwo(){
        this.resetBtnTwo.addEventListener("click", ()=>{
            this.trainMovementTrainTwo(false)
        })
    }
    trainMovementTrainTwo(ridetwo){
        let y = this.trainPositionTwo.offsetTop;
        let x = this.trainPositionTwo.offsetLeft;
        this.messagetwo = "X: " + x + " y : " + y;
        if (ridetwo){
            this.myTrainTwoTime = setInterval(() =>{
                this.speedAndDistanceTwo()
            }, 50);
        } else {
            clearInterval(this.myTrainTwoTime)
        }
    }
    sleep(ms){
        return new Promise (resolve => setTimeout (resolve, ms));
    }
    async speedAndDistance() {

        let distance = 1; // Change value to make the train ride a longer distance each time interval
        let y = this.trainPosition.offsetTop;
        let X = this.trainPosition.offsetLeft;
        
        console.log(`1 x: ${X} Y:${y}`);

        if (y > this.stations[7].fY){
            this.direction = "up";
            console.log(`2 x: ${X} Y:${y}`);

        }
        if ( y == this.stations[0].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[1].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[2].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[3].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[4].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[5].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[6].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if ( y == this.stations[7].fY){
            console.log(`3 x: ${X} Y:${y}`);
            this.trainMovement(false);
            await this.sleep(2000);
            this.trainMovement(true);
            this.direction = "down";
            
        }
        if(y < this.stations[0].fY){
            this.direction = "down";
            console.log(`4 x: ${X} Y:${y}`);
        }
        if(this.direction === "up"){
            y = y - distance;
            console.log(`5 x: ${X} Y:${y}`);
            this.trainPosition.style.top = y + "px";
        }
        if(this.direction === "down"){
            y = y + distance;
            console.log(`6 x: ${X} Y:${y}`);
            this.trainPosition.style.top = y + "px";
        }
    }
    async speedAndDistanceTwo(){
        let distancetwo = 1;
        let y = this.trainPositionTwo.offsetTop;
        let x = this.trainPositionTwo.offsetLeft;
        if (y > this.stations[7].fY){
            this.directiontwo = "up";
            console.log(`2 x: ${x} Y:${y}`);

        }
        if ( y == this.stations[0].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[1].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[2].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[3].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[4].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[5].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[6].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.directiontwo = "down";
            
        }
        if ( y == this.stations[7].fY){
            console.log(`3 x: ${x} Y:${y}`);
            this.trainMovementTrainTwo(false);
            await this.sleep(2000);
            this.trainMovementTrainTwo(true);
            this.direction = "down";
            
        }
        if(y < this.stations[0].fY){
            this.directiontwo = "down";
            console.log(`4 x: ${x} Y:${y}`);
        }
        if(this.directiontwo === "up"){
            y = y - distancetwo;
            console.log(`5 x: ${x} Y:${y}`);
            this.trainPositionTwo.style.top = y + "px";
        }
        if(this.direction === "down"){
            y = y + distancetwo;
            console.log(`6 x: ${x} Y:${y}`);
            this.trainPositionTwo.style.top = y + "px";
        }
    }
}

export default TrainMoving