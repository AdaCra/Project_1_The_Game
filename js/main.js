let backgroundEasy,
	backgroundE2M,
	backgroundMedium,
	backgroundM2H,
	backgroundHard

let playerType1,
	playerType2

let fuel,
	time

let blueTruck,
	greenVan,
	redCar,
	redTruck,
	yellowCar

let manhole,
	oilSpill,
	roadWorks

let bkgndSize = [600, 900]
let background 

// Load game assets
function preload() {
	backgroundEasy 		= "./assets/background/roadLanesX4.png";
	backgroundE2M 		= "./assets/background/roadLanes4To3.png";
	backgroundMedium 	= "./assets/background/roadLanesX3.png";
	backgroundM2H 		= "./assets/background/roadLanes3To2.png";
	backgroundHard 		= "./assets/background/roadLanesX2.png";
	
	playerType1 	= "./assets/player/carType1.png";
	playerType2 	= "./assets/player/carType2.png";

	fuel	= "./assets/collectables/fuel.png";
	time	= "./assets/collectables/time.png";

	blueTruck	= "./assets/traffic/blueTruck.png";
	greenVan	= "./assets/traffic/greenVan.png";
	redCar		= "./assets/traffic/redCar.png";
	redTruck	= "./assets/traffic/redTruck.png";
	yellowCar	= "./assets/traffic/yellowCar.png";

	manhole		= "./assets/obstacles/manhole.png";
	oilSpill	= "./assets/obstacles/oilSpill.png";
	roadWorks	= "./assets/obstacles/roadWorks.png";
}

function setup() {
	bkgndSize = [windowHeight/3*2, windowHeight]
	createCanvas(bkgndSize[0], bkgndSize[1])
	frameRate(25)

}

function draw() {
	image(backgroundEasy, 0,0);
}

// function keyPressed() {
	// if (keyCode === 32) {
	// 	game.player.jump()
// 	}
// }
 