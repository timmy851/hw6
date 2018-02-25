//balls bouncing and changing size 
//RGB blue background 


var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);

  for (var index = 0; index < 1000; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(360), 60, 100),
      r: 90
    }
  }
}

function draw() {
  background(51, 255, 255);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

    // draw it
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
      circle.r -= 15;
			circle.c = color(random(360), 60, 100);
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
      circle.r -= 15;
			circle.c = color(random(360), 60, 100);
    }
    if (circle.r <= 0) {
			circle.r = 30;
			circle.x = width/6;
			circle.y = height/6;
    } 
  }
}
