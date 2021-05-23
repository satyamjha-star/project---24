
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var roof1;
var ball1,ball2,ball3,ball4,ball5;
var diameter = 40;
var rope1;
var mConstraint;

function preload()
{
	
}

function setup() 
{
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	
	let options = 
	    {
		    mouse : canvasmouse
	    }
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	roof1 = new roof(800,height/4,width/7,20);
	ball1 = new pendulum(width/2-diameter*2,height/4+500,diameter);
	ball2 = new pendulum(width/2-diameter,height/4+500,diameter);
	ball3 = new pendulum(width/2,height/4+500,diameter);
	ball4 = new pendulum(width/2+diameter,height/4+500,diameter);
	ball5 = new pendulum(width/2+2*diameter,height/4+500,diameter);

	rope1 = new rope(ball1.body,roof1.body,-diameter*2,0);
	rope2 = new rope(ball2.body,roof1.body,-diameter,0);
	rope3 = new rope(ball3.body,roof1.body,0,0);
	rope4 = new rope(ball4.body,roof1.body,+diameter,0);
	rope5 = new rope(ball5.body,roof1.body,+diameter*2,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(ball1.body, {x : mouseX, y : mouseY});
}