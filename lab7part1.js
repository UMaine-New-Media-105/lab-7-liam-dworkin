//going to talk to VJ after class. I am not 'done' but wanted to turn in on time while I catch up
function setup() {
  createCanvas(1000, 600);
  //noLoop to keep it from 'freaking out'
  noLoop();
  //defining 'sprite' variables for the array like we did with the class assignment
  sprites = ["star1", "star2", "star3"];
  //defining the scope of the array (12) - I think they look nice w/ the spacing of 12
  spritesPerRow = 20;
  //defining the offset- spacing of the column
  offsetLeft = 1000 / spritesPerRow;
}

function draw() {
  //background color, translation to get my row straighter and on screen (the only way I could figure it) and then a for loop containing the row parameters for how to count as well as well as how to draw on the array's listed assets for a 'row'

  //couldn't get it 100% straight- I'll ask about it later because this isn't 100% done
  background("palegoldenrod");
  push();
  translate(40, 40);
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = sprites[counter % sprites.length];
    chooseSprite(thisSprite, counter * offsetLeft, 0);
  }
  pop();
}

//the conditional that defines the 'star1' variables values as far as size, shape, etc...

//stole my own code from assignment 3: I altered the variables that define my row loops to make them diagonal and have 20 separate images instead of just 12 or so.

function chooseSprite(spriteName, spriteX, spriteY) {
  if (spriteName == "star1") {
    starBuilder1(spriteX, spriteY, 22, 90, 8, 0.65);
  } else if (spriteName === "star2") {
    starBuilder2(spriteX, spriteY, 32, 100, 6, 0.65);
  } else if (spriteName == "star3") {
    starBuilder3(spriteX, spriteY, 42, 55, 10, 0.65);
  }
}

//three separate functions (I am now realizing I didn't have to delete color variables out of these functions but that's a later fix- it works and isn't super janky) It creates the stars and has the variables for x,y as defined by spriteX/Y variables above as well as radius and npoints (can add more points to each star if you'd like)

function starBuilder1(x, y, radius1, radius2, npoints, flip) {
  push();
  fill("orange");
  rotate(flip);
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let one = x + cos(a) * radius2;
    let two = y + sin(a) * radius2;
    vertex(one, two);
    one = x + cos(a + halfAngle) * radius1;
    two = y + sin(a + halfAngle) * radius1;
    vertex(one, two);
  }
  endShape(CLOSE);
  pop();
}

function starBuilder2(x, y, radius1, radius2, npoints, flip) {
  push();
  fill("purple");
  rotate(flip);
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let one = x + cos(a) * radius2;
    let two = y + sin(a) * radius2;
    vertex(one, two);
    one = x + cos(a + halfAngle) * radius1;
    two = y + sin(a + halfAngle) * radius1;
    vertex(one, two);
  }
  endShape(CLOSE);
  pop();
}

function starBuilder3(x, y, radius1, radius2, npoints, flip) {
  push();
  fill("green");
  rotate(flip);
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let one = x + cos(a) * radius2;
    let two = y + sin(a) * radius2;
    vertex(one, two);
    one = x + cos(a + halfAngle) * radius1;
    two = y + sin(a + halfAngle) * radius1;
    vertex(one, two);
  }
  endShape(CLOSE);
  pop();
}
