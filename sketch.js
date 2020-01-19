const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingplatform;
var platform1, platform2,platform3;
var box1,box2,box3,box4,box5,box6;
var striker;
var slingshot;
var net;
var stand;

function setup(){
    createCanvas(1400,675);
    engine = Engine.create();
    world = engine.world;
    ground = new StaticPlatform(width/2,660,width,30);
    ground2 = new StaticPlatform(width/2,650,width,30);
    slingplatform = new StaticPlatform(300,500,400,100);
    platform1 = new StaticPlatform(1000,height/4,200,30);
    platform2 = new StaticPlatform(1000,height/2,200,30);
    platform3 = new StaticPlatform(1000,height*3/4,200,30);
    stand = new StaticPlatform(300,415,40,75);
    box1 = new Box(950,100);
    box2 = new Box(1050,100);
    box3 = new Box(950,250);
    box4 = new Box(1050,250);
    box5 = new Box(950,400);
    box6 = new Box(1050,400);
    striker = new Striker(280,350);
    slingshot = new Slingshot(striker.body,{x:300,y:330});
    net = new Net(120,370);
}

function draw(){
    Engine.update(engine);
    background(0);
    push();
    noStroke();
    ground2.display("#cccb3");
    ground.display("#000099");
    slingplatform.display("#990099");
    platform1.display("#4d0039");
    platform2.display("#4d0039");
    platform3.display("#4d0039");
    box1.display("#ff0000");
    box2.display("#ff0000");
    box3.display("#ff5500");
    box4.display("#ff5500");
    box5.display("#ffff00");
    box6.display("#ffff00");
    rectMode(CENTER);
    fill("#ff0000");
    rect(315,330,30,80);
    striker.display("#00ff00");
    stand.display("#ff0000");
    rect(275,330,30,80);
    slingshot.display();
    net.display();
    text("INSTRUCTIONS: DRAG THE MOUSE TO MOVE THE GREEN BOX. PRESS SPACE TO ATTACH THE GREEN BOX ONCE IT IS SHOT.",100,100);
}

function mouseDragged(){
    slingshot.drag();
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode == 32){
   slingshot.attach(striker.body);
}
}