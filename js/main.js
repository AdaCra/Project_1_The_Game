// <-*-*-*-*-instructions for final loading interaction-*-*-*-*->

// <-*-*-*-*-Load game assets, referenced in game.js-*-*-*-*-*>
const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 800)
}

function draw() {
	game.draw()
}


// <-*-*-*-*-movements referenced in player.js file-*-*-*-*->
function keyPressed() {
	if (keyCode === 38 || keyCode === 87) {
		game.player.accelerate()
	}

    if (keyCode === 37 || keyCode === 65) {
		game.player.left()
	}

    if (keyCode === 39 || keyCode === 68) {
		game.player.right()
	}

    if (keyCode === 40 || keyCode === 83) {
		game.player.brake()
	}
}