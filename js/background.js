class Background { 
    constructor() {
        this.bkgEasy;
        this.bkgE2M;
        this.bkgMedium;
        this.bkgM2H;
        this.bkgHard;
        this.currentBkgnd1 = this.bkgEasy
        this.currentBkgnd2 = this.bkgEasy
        this.currentBkgnd3 = this.bkgEasy
        this.x = 0;
        this.y = 0;
        this.setCounter = 0;
        this.viewSize = [600, 900]
        this.lanePositions = [85, 195, 305, 415]

    }
    
    preload() {
        this.currentBkgnd1  = loadImage("./assets/background/roadLanesX4.png");
        this.currentBkgnd2  = loadImage("./assets/background/roadLanesX4.png");
        this.currentBkgnd3  = loadImage("./assets/background/roadLanesX4.png");
        this.bkgEasy 	    = loadImage("./assets/background/roadLanesX4.png");
        this.bkgE2M 	    = loadImage("./assets/background/roadLanes4To3.png");
        this.bkgMedium      = loadImage("./assets/background/roadLanesX3.png");
        this.bkgM2H 	    = loadImage("./assets/background/roadLanes3To2.png");
        this.bkgHard 	    = loadImage("./assets/background/roadLanesX2.png")
    }

    setup() {
;
    }

    draw() {
        clear()
        this.y += 5
        image(this.currentBkgnd1, 0, this.y, width, height)
        image(this.currentBkgnd2, 0, this.y - this.currentBkgnd2.height, width, height)
        image(this.currentBkgnd3, 0, this.y - (this.currentBkgnd2.height*2), width, height)			// Here we add a second image
			// When the image leaves the screen we set it to the starting position
			if (this.y >= height*2) {
                this.y = 0;
                this.setCounter ++;
            }
            if (this.setCounter === 2){
                this.currentBkgnd2 = this.bkgE2M
                this.currentBkgnd3 = this.bkgMedium
            }
            if (this.setCounter === 3){
                this.currentBkgnd1 = this.bkgMedium
                this.currentBkgnd2 = this.bkgMedium
                this.currentBkgnd3 = this.bkgMedium
            }
            if (this.setCounter === 5){
                this.currentBkgnd2 = this.bkgM2H
                this.currentBkgnd3 = this.bkgHard
            }
            if (this.setCounter === 6){
                this.currentBkgnd1 = this.bkgHard
                this.currentBkgnd2 = this.bkgHard
                this.currentBkgnd3 = this.bkgHard
            }
    }

}