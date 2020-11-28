
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, paper, ground, box1, box2, box3;

function setup() {
	createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(50, 360, 30)
    ground = new Ground(400, 390, 800, 20, {isStatic: true})
    box1 = new Box(588, 370, 150, 20);
    box2 = new Box(502, 335, 20, 90);
    box3 = new Box(670, 335, 20, 90);
    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:23, y:-50});
  }
}


