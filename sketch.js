const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow1


var bg
var engine, world;
function preload() {
  bg = loadImage("snow1.jpg")
}








function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
 snowfalling();
}

function draw() {
  background(bg);
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();

}
function snowfalling(){
  snow1 = new Snow(15, 10, 50, 50)
  snow2 = new Snow(30, 30, 50, 50)
  snow3 = new Snow(40, 0, 50, 50)
  snow4 = new Snow(100, 15, 50, 50)
  snow5 = new Snow(200, 55, 50, 50)
  snow6 = new Snow(300, 45, 50, 50)
  snow7 = new Snow(350, 12, 50, 50)
  snow8 = new Snow(600, 80, 50, 50)
  snow9 = new Snow(700, 75, 50, 50)
  snow10 = new Snow(750, 90, 50, 50)
  snow11 = new Snow(800, 60, 50, 50)

}

