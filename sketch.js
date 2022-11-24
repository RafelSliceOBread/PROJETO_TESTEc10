var ship, ship_sailing
var sea, water
function preload(){
  sea = loadImage("sea.png");
  ship_sailing = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);  
  water = createSprite(180,200,400,20);
  water.addImage("sea", sea)
  water.x = water.width /2;
  water.velocityX = -4;

  ship = createSprite(150,300,140,60);
  ship.addAnimation("ajaj", ship_sailing);
  ship.scale = 0.25
}

function draw() {
  background("blue");

    if (water.x < 0) {
      water.x = water.width / 2;
    }
    
    drawSprites();
}
