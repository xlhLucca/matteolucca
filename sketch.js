let x
let y

function setup() {
  createCanvas(400, 400);
  background('red');
  x = random(400);
  y = random(400);
}

function draw() {
 circle(x, y, 10);
 
  if (mouseX == x) {
    text('Te encontrei!', 200, 200);
  }

