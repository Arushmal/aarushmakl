var fixedrect,movingrect


function setup() {
  
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
fixedrect.shapeColor="green";
fixedrect.debug=true;

movingrect=createSprite(200, 300, 50, 50);
movingrect.shapeColor="green";
movingrect.debug=true;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}