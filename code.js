var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

var paddle = createSprite(200,390,100,20)
var ball_0 = createSprite(200,200,20,20);
var points = 0
var gameState = "start";
var edges = createEdgeSprites();
function draw() {

background("white");
drawSprites();
fill("red");
textSize(20);
textFont("Arial");
text("J1: " + points, 270, 30);
text("Aperte SHIFT pra começar!", 0, 30);

paddle.x = World.mouseX

if (keyDown("shift")) {
  ball_0.velocityY = 15
  ball_0.velocityX = randomNumber(-5,5)
  paddle.x = 200
  paddle.y = 390
}
if (ball_0.y > 400) {
 text("GAME OVER", 120, 230)
}

ball_0.bounceOff(paddle);
ball_0.bounceOff(edges[1]);
ball_0.bounceOff(edges[2]);
ball_0.bounceOff(edges[0]);

if (ball_0.isTouching(box1)) {
    ball_0.bounceOff(box1);
    box1.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
    
  }
if (ball_0.isTouching(box2)) {
    ball_0.bounceOff(box2);
    box2.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box3)) {
    ball_0.bounceOff(box3);
    box3.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box4)) {
    ball_0.bounceOff(box4);
    box4.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box5)) {
    ball_0.bounceOff(box5);
    box5.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box6)) {
    ball_0.bounceOff(box6);
    box6.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box7)) {
    ball_0.bounceOff(box7);
    box7.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box8)) {
    ball_0.bounceOff(box8);
    box8.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box9)) {
    ball_0.bounceOff(box9);
    box9.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box10)) {
    ball_0.bounceOff(box10);
    box10.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box11)) {
    ball_0.bounceOff(box11);
    box11.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box12)) {
    ball_0.bounceOff(box12);
    box12.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box13)) {
    ball_0.bounceOff(box13);
    box13.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box14)) {
    ball_0.bounceOff(box14);
    box14.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box15)) {
    ball_0.bounceOff(box15);
    box15.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (ball_0.isTouching(box16)) {
    ball_0.bounceOff(box16);
    box16.destroy();
    points++
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
if (points == 16) {
    text("YOU WIN", 120, 230);
    ball_0.velocityY = 0;
    ball_0.velocityX = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
