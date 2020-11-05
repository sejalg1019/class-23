// name spacing
const Engine=Matter.Engine; //universe
const World=Matter.World; //planet
const Bodies=Matter.Bodies; //objects

var engine1,world1,ground,box1,box2,box3;

function setup() {
  createCanvas(800,400);
  engine1 = Engine.create(); //creating engine1
  world1 = engine1.world; //creating world1 inside engine 1
  ground = new Ground(400,390,800,20);
  box1 = new Box(400,300,50,50);
  box2 = new Box(440,100,50,50);
  box3 = new Box(360,100,50,100);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine1); //starting the engine
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}