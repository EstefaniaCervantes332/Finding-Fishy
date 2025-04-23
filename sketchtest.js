let bubbles = [];
let bg;

function preload(){
 bg = loadImage("UTF-8fishy.jpeg")
 
}

function setup() {
  createCanvas(1400,2465);
}


function draw() {
  image(bg,0,0);

  // Update and display all bubbles
  for (let b of bubbles) {
    b.update();
    b.display();
  }
}

function mousePressed() {
  // Add a new bubble at the mouse position
  bubbles.push(new Bubble(mouseX, mouseY));
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(20, 50);
    this.c = color(random(255), random(255), random(255), 150); // Semi-transparent
  }

  update() {
    // Make bubbles float upward slightly
    this.y -= 0.5;
  }

  display() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
