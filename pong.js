

var puck = {
  x: 200,
  y: 200,
  xSpeed: 1,
  ySpeed: -1,
  r: 15
};

var p1 = 0;
var p2 = 0;
var edgeOffset = 20;

var player1 = {
  x: edgeOffset,
  y: 200,
  ht: 50,
  wd: 10
};

var player2 = {
  x: 400-edgeOffset,
  y: 200,
  ht: 50,
  wd: 10
};


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(136,228,180);
  	if (p1 > 7 || p2 > 7) {
		if (p1>p2) {
			push();
			text('Player 1 Wins!:', width / 3, height/3);
			text('Click to play again', width / 2.5, 3*height/4.5);
			if (mouseIsPressed) {
				p1 = 0;
				p2 = 0;
			}
			pop();
		}
		else {
			push();
			text('Player 2 Wins!:', width / 3, height/3);
			text('Click to play again', width / 2.5, 3*height/4.5);
			if (mouseIsPressed) {
				p1 = 0;
				p2 = 0;
			}
			pop();
		}
	}
	else {
	text('Player 1 Score:', width / 10, 20);
  text('Player 2 Score:', width*2 / 3, 20);
	text(p1, width/4 + 40, 50);
	text(p2, 9*width/10-1, 50);
  // draw puck
  ellipse(puck.x, puck.y, puck.r*1.5);
  
  // move puck
  if (puck.y < puck.r || puck.y > height - puck.r) {
    puck.ySpeed = -puck.ySpeed;
  }
  
  puck.x += puck.xSpeed;
  puck.y += puck.ySpeed;
  
  // draw paddles
    
  
  rect(player1.x, player1.y, player1.wd, player1.ht);
  rect(player2.x-player2.wd, player2.y, player2.wd, player2.ht);
  
    
  // paddle movement
  if (player1.paddleDown && ! player1.paddleUp) {
    player1.y += 3;
  }
  if (player1.paddleUp && ! player1.paddleDown) {
    player1.y -= 3;
  } 

  if (player2.paddleDown && ! player2.paddleUp) {
    player2.y += 3;
  }
  if (player2.paddleUp && ! player2.paddleDown) {
    player2.y -= 3;
  }
  
  // don't let paddles outside of the play area
  player1.y = constrain(player1.y, 0, height-player1.ht-1);
  player2.y = constrain(player2.y, 0, height-player2.ht-1);
  
  // bounce puck on paddles -- player 1 -- based on x-coordinate
  if (puck.x - puck.r < player1.x + player1.wd) {
    // check if puck is within paddle height...
    if (puck.y > player1.y && puck.y < player1.y + player1.ht) {
      puck.xSpeed = abs(puck.xSpeed);
    } else {
      p2 +=1;
			puck.x = width/2;
			puck.y = height/2;
			puck.ySpeed = -puck.ySpeed;
			puck.xSpeed = -puck.xSpeed;
    }
  }
  
  // bounce puck on paddles -- player 2 -- based on x-coordinate
  if (puck.x + puck.r > player2.x - player2.wd) {
    // check if puck is within paddle height...
    if (puck.y > player2.y && puck.y < player2.y + player2.ht) {
      puck.xSpeed = -abs(puck.xSpeed);
    } else {
      p1 +=1;
			puck.x = width/2;
			puck.y = height/2;
			puck.ySpeed = -puck.ySpeed;
			puck.xSpeed = -puck.xSpeed;
    }
  }
	}
}

// keyboard input
function keyPressed() {
  print(key);
  if (key == 'A') {
    player1.paddleDown = true;
  } else if (key == 'Q') {
    player1.paddleUp = true;
  }
  
  if (keyCode == DOWN_ARROW) {
    player2.paddleDown = true;
  } else if (keyCode == UP_ARROW) {
    player2.paddleUp = true;
  }
}

function keyReleased() {
  if (key == 'A') {
    player1.paddleDown = false;
  } else if (key == 'Q') {
    player1.paddleUp = false;
  }
  
  if (keyCode == DOWN_ARROW) {
    player2.paddleDown = false;
  } else if (keyCode == UP_ARROW) {
    player2.paddleUp = false;
  }
}
