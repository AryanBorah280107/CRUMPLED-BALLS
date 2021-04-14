const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin, ground, paperball;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(1200,650);
	paperball = new Paperball(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  dustbin.display();

}

