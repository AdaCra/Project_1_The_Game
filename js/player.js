class Player {
    constructor () {
        this.player;
        this.playerType1;
        this.playerType2;
        this.height = 200
        this.width = 100
        this.y = 900 - (this.height + 50)
        this.x = backgrounds.lanePositions[2]
    }


    preload() {
        this.player = loadImage("./assets/player/carType1.png");
        this.playerType1 = loadImage("./assets/player/carType1.png");
	    this.playerType2 = loadImage("./assets/player/carType2.png");
    }

    // setup() {
    //     if (Math.ceil(Math.random() * 2) === 1){
    //         return this.player = this.playerType1
    //     } else {return  this.player = this.playerType2};
    // }

    draw()  {
         image(this.playerType2, this.x, this.y, this.width, this.height)
    }
}