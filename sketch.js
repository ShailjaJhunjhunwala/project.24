
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paddle,paddle1,paddle2;
var gound;
var ball;

function preload()
{
	 	
	 	
}

function setup() {
	createCanvas(800,700);
    rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	paddle = new Dustbin(650,650,200,20)
    paddle1 = new Dustbin(740,590,20,100)	
    paddle2 = new Dustbin(560,590,20,100)

	ground = createSprite(width/2,660,800,20)
	ground.shapeColor = color("white")

    ball = new Ball(100,620,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paddle.display();
  paddle1.display();
  paddle2.display();
  ball.display();
  keyPressed();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.ball.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



