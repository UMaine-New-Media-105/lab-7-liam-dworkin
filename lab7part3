let yeet = true;
function setup() {
  createCanvas(1000, 600);
  noLoop();
  //defining 'sprite' variables for the array like we did with the class assignment
  sprites = ["star1"];
  //defining the scope of the array (12) - I think they look nice w/ the spacing of 12
  spritesPerRow = 6;
  //defining the offset- spacing of the column
  offsetLeft = 1150 / spritesPerRow;
}

function draw() {
  background("navy");

  /*Doesn't work I've come back to this a couple times. I don't know if I can get it working without an agressive restart or some serious help.*/

  if (mouseIsPressed) {
    push();
    translate(40, 40);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    //translated over again for multiple rows
    push();
    translate(40, 200);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    push();
    translate(40, 350);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    push();
    translate(40, 510);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite(thisSprite, counter * offsetLeft, 0);
    }
    pop();
  } else {
    push();
    translate(40, 40);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite2(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    //translated over again for multiple rows
    push();
    translate(40, 200);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite2(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    push();
    translate(40, 350);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite2(thisSprite, counter * offsetLeft, 0);
    }
    pop();

    push();
    translate(40, 510);
    for (let counter = 0; counter < spritesPerRow; counter++) {
      let thisSprite = sprites[counter % sprites.length];
      chooseSprite2(thisSprite, counter * offsetLeft, 0);
    }
    pop();
  }
}

//the conditional that defines the 'star1' variables values as far as size, shape, etc...

//edited the initial variables in order to make straight grids of 15+ shapes across the screen.

//could not get a full gradient across yet but there is a pattern of each row/grid of the looped shapes with a partial gradient in cell form

//add in R, G, B to both this and the 'starBuilder' function. Call back the RGB value and offset using translate in a nested loop (notes for my future self)

function chooseSprite(spriteName, spriteX, spriteY) {
  push();
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "orange");
  push();
  translate(105, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "palegoldenrod");
  pop();
  push();
  translate(85, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "tan");
  pop();
  push();
  translate(65, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "yellow");
  pop();
  translate(45, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "gold");
  push();
  translate(-80, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "red");
  pop();
  pop();
}

function chooseSprite2(spriteName, spriteX, spriteY) {
  push();
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "magenta");
  push();
  translate(105, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "lightgray");
  pop();
  push();
  translate(85, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "lightblue");
  pop();
  push();
  translate(65, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "cyan");
  pop();
  translate(45, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "pink");
  push();
  translate(-80, 0);
  starBuilder1(spriteX, spriteY, 22, 90, 8, 0, "purple");
  pop();
  pop();
}

function starBuilder1(x, y, radius1, radius2, npoints, flip, color1) {
  push();
  fill(color1);
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
