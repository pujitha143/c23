const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1,box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(100,50,50,80);
    box2= new Box(200,60,20,40);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
}