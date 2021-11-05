
const window_hight = window.innerHeight;
const window_width = window.innerWidth;

var main_array = []
const array_size = 100
var rect_size = 0
function setup() {
  createCanvas(window_width, window_hight);
  var biggest = 0
  for (let index = 0; index < array_size; index++) {
    let rand = int(random(1, 100));
    main_array.push(rand);
    if(rand>biggest) biggest = rand;
  }
  rect_size = window_hight/biggest
}


var i = 0
var j = 0
const speed = 4

function draw() { //TODO: understand how to make it slow 
  background(220);
  // doing `speed` element at one draw
  for (let index = 0; index < speed; index++) {
    if (main_array[j] > main_array[j + 1]) {
      var temp = main_array[j]
      main_array[j] = main_array[j + 1]
      main_array[j + 1] = temp
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

  show(main_array)
  text("Bubble sort", (window_width / 2) - 100, 20, 300, 200)
  textSize(30)
}

const rect_width = window_width / array_size

function show(array) {
  background(220);
  let i = 0
  main_array.forEach(element => {
    rect((i++) * rect_width, window_hight, rect_width, -(element *rect_size)+100)
  });
}

function swap(a, b) {
  let temp = a
  a = b
  a = temp
}
