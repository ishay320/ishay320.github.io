var w = window.innerWidth;
var h = window.innerHeight;  

var rand = []
const rand_size = 500
function setup() {
  canvas=createCanvas(w, h);
  for (let index = 0; index < rand_size; index++) {
    addToArr(rand)
  }
}

function draw() {
  background(220);
  var i = rand_size/100
  rand.forEach(element => {
    ellipse(element[0],element[1],i+element[2]);
    let c = color(element[3],element[4],element[5]);
    fill(c);
    noStroke();
    i-=0.1
  });
  rand.shift()
    addToArr(rand)
  fill(color(0,0,0))
  stroke(255)
    text("Welcome",mouseX-200,mouseY-80,500,200)
  textSize(100)
}

function addToArr(rand){
    tmp = [int(random(0,w)),int(random(0,h)),random(-2,2),int(random(0,255)),int(random(0,255)),int(random(0,255))]
    rand.push(tmp)
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}