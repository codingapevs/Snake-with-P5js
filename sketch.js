//timer's interval
var interval = 10000;
var lastRecordedTime = 0;
//snake object
var s;
//grid scale
var scl = 20;
//food
var food;
var powerUp;
var powerUpAvaible;

function setup() {
//canvas creation
  createCanvas(600, 600);
//initialize the snake object;
  s = new Snake();
//frame rate setting to slow down
  frameRate(10);
  powerUpAvaible = false;
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

function powerUpLocation() {
//size of collums
  var cols = floor(width/scl);
//size of rows
  var rows = floor(height/scl);
//vector location of food
  powerUp = createVector(floor(random(cols)), floor(random(rows)));
  powerUp.mult(scl);
    powerUpAvaible = true;
}

function mousePressed() {
//add one to tail lenght (for testing)
  s.total++;
}

function draw() {
//draw background
  background(51);
//check if snake eats food
    
  if(millis()-lastRecordedTime>interval){
    //change FILL color
      powerUpLocation();
   //and record time for next tick
      lastRecordedTime = millis(); 
  }
  
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
  if(powerUpAvaible){
      s.eatPowerUp(powerUp);  
      fill(100, 0, 100);
      noStroke();    
      rect(powerUp.x, powerUp.y, scl, scl);
  }
  
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

