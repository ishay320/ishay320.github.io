//  import Bubble from "./bubble.js"

const window_hight = window.innerHeight;
const window_width = window.innerWidth;

var main_array = []
const array_size = 50

function setup() {
  createCanvas(window_width, window_hight);

  for (let index = 0; index < array_size; index++) {
    let rand = random(0, 1);
    main_array.push(rand);
  }

}


const speed = 4
var bubble = new Bubble(main_array, 0, 0, window_width < window_hight ? window_width / 2 : window_hight / 2)

function draw() { //TODO: understand how to make it slow 
  background(220);

  if (bubble.step(speed)) {
    noLoop()
  }
  bubble.show()
  bubble.show_text()
}
