const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;
var radius = 40;

function setup() {
  createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  };

  ball = Bodies.circle(450, 450, 10, ball_options);
  World.add(world, ball);

  leftSide = new Ground(1000, height - 100, 20, 120);
  rightSide = new Ground(1300, height - 100, 20, 120)
  groundObj = new Ground(width / 2, height - 30, width, 20);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.show();
  rightSide.show();
  leftSide.show();



  ellipse(ball.position.x, ball.position.y, radius, radius)

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 15, y: -15 })
	}
}
