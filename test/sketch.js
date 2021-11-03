var w = window.innerWidth;
var h = window.innerHeight;

var click = false

var rand = []
const rand_size = 500

function setup() {
  canvas = createCanvas(w, h);
  for (let index = 0; index < rand_size; index++) {
    addToArr(rand)
  }
}

function draw() {
  background(220);
  var i = rand_size / 100
  rand.forEach(element => {
    ellipse(element[0], element[1], i + element[2]);
    let c = color(element[3], element[4], element[5]);
    fill(c);
    noStroke();
    i -= 0.1
  });
  if (click) {
    rect(0, 0, w, h)
  }
  rand.shift()
  addToArr(rand)
  fill(color(0, 0, 0))
  stroke(255)
  text("Welcome", mouseX - 200, mouseY - 80, 500, 200)
  textSize(100)
  backButton()
}

function mousePressed() {
  click = !click
}

function backButton() {
  startXY = [20, 20]
  endXY = [100, 50]
  fill(50, 50, 50, 150)
  noStroke()
  rect(startXY[0], startXY[1], endXY[0], endXY[1])
  fill(255, 255, 255, 150)
  triangle(startXY[0] * 1.5, endXY[1] / 2 + startXY[1],
    startXY[0] + (endXY[0] / 2),
    startXY[1] * 1.3,
    startXY[0] + (endXY[0] / 2),
    (startXY[1] + endXY[1]) * 0.9);
}

function addToArr(rand) {
  tmp = [int(random(0, w)), int(random(0, h)), random(-2, 2), int(random(0, 255)), int(random(0, 255)), int(random(0, 255))]
  rand.push(tmp)
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
}