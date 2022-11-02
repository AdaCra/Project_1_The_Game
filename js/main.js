
let backgrounds = new Background()
let player = new Player()

// to be split below


let fuel;
let	addToClock;

let blueTruck;
let	greenVan;
let	redCar;
let	redTruck;
let	yellowCar;

let manhole;
let	oilSpill;
let	roadWorks;

let bkgndSize = [600, 900] 

// Load game assets
function preload() {
	
	fuel	= loadImage("./assets/collectables/fuel.png");
	addToClock	= loadImage("./assets/collectables/time.png");

	blueTruck	= loadImage("./assets/traffic/blueTruck.png");
	greenVan	= loadImage("./assets/traffic/greenVan.png");
	redCar		= loadImage("./assets/traffic/redCar.png");
	redCar		= loadImage("./assets/traffic/redCar.png");
	redTruck	= loadImage("./assets/traffic/redTruck.png");
	yellowCar	= loadImage("./assets/traffic/yellowCar.png");

	manhole		= loadImage("./assets/obstacles/manhole.png");
	oilSpill	= loadImage("./assets/obstacles/oilSpill.png");
	roadWorks	= loadImage("./assets/obstacles/roadWorks.png");
	player.preload()
	backgrounds.preload()
}

function setup() {
	bkgndSize = [600, 900],
	createCanvas(600, 900)
}

function draw() {
	backgrounds.draw()
	player.draw()
}

// function keyPressed() {
	// if (keyCode === 32) {
	// 	game.player.jump()
// 	}
// }
 