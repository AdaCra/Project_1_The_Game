// <-*-*-*-*-source for main.js-*-*-*-*->

class Game {
    constructor (){
        this.background = new Background()      /*loaded from background.js*/
        this.player = new Player()              /*loaded from player.js*/
        this.road
        this.backgroundImages
        this.playerImage
        this.obstacles = []
        this.collectibles = []
        this.effects = []
    }

    preload(){
        this.road = [
            {src: loadImage()}
        ]
    }
}

console.log("hello world")