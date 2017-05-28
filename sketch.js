//snake object
var s;
//grid scale
var scl = 20;
//food
var food;

function setup() {
//canvas creation
  createCanvas(600, 600);
//initialize the snake object;
  s = new Snake();
//frame rate setting to slow down
  frameRate(10);
//first food location randomly
  pickLocation();

}

function pickLocation() {
//size of collums
  var cols = floor(width/scl);
//size of rows
  var rows = floor(height/scl);
//vector location of food
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
//add one to tail lenght (for testing)
  s.total++;
}

function draw() {
//draw background
  background(51);
//check if snake eats food
  if (s.eat(food)) {
    //generate new food in new location
    pickLocation();
  }
//check death conditons
  s.death();
//update snake
  s.update();
//display snake
  s.show();
//settings and drawing of food
  fill(255, 0, 100);
  noStroke();    
  rect(food.x, food.y, scl, scl);
}




//set directions accordion to key press
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if(s.yspeed != 1 )
        s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    if(s.yspeed != -1 )
        s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    if(s.xspeed != -1 )
      s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    if(s.xspeed != 1 )
        s.dir(-1, 0);
  }
}

