
const hight = window.innerHeight;
const width = window.innerWidth;

var random_array = []
const array_size = 100

function setup() {
  createCanvas(width, hight);
  for (let index = 0; index < array_size; index++) {
    random_array.push(int(random(1, 100)));
  }
}

const wide = width / array_size
let i = 0
let j = 0
var speed = 4

function draw() { //TODO: understand how to make it slow 
  background(220);
  for (let index = 0; index < speed; index++) {
    if (random_array[j] > random_array[j + 1]) {
      var temp = random_array[j]
      random_array[j] = random_array[j + 1]
      random_array[j + 1] = temp
    }
    j++
    if (j == (array_size - i)) {
      j = 0
      i++
    }
    if (i == (array_size)) {
      i = 0
    }
  }

  show(random_array)
  text("Bubble sort", (width / 2) - 100, 20, 300, 200)
  textSize(30)

}

function show(array) {
  background(220);
  var i = 0
  random_array.forEach(element => {
    rect((i++) * wide, hight, wide, -(element * 4))
  });
}

function swap(a, b) {
  var temp = a
  a = b
  a = temp
}
