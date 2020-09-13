const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, slingshot,polygon, backgroundImg;
var bg = "bg.png";
var score = 0; 
var fill = 0;

function preload()
{
	getTime();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,400,300,30);
	box1 = new Box(380,390);
	box2 = new Box(440,380);
	box3 = new Box(500,380);
	box4 = new Box(560,380);
	box5 = new Box(620,380);
	box6 = new Box(440,320);
	box7 = new Box(500,320);
	box8 = new Box(560,320);
	box9 = new Box(500,260);
	polygon = new Polygon(100,100,20)
	slingshot = new SlingShot(polygon.body,{x:100,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
  	background(backgroundImg);
  }
  textSize(30);
  fill(255);
  text("SCORE: " + score,600,40);
  
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  polygon.display();
  slingshot.display();
 
}


function mouseDragged(){

	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
	
}
	
	
function mouseReleased(){
	slingshot.fly();
	
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attatch(polygon.body);
	}
}

async function getTime(){
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var responseJSON = await response.json();
	var dateTime = responseJSON.datetime;
	var hour = dateTime.slice(11, 13);

	if(hour >= 06 && hour <= 18){
		bg = "bg.png";
	}
	else{
		bg = "bg2.jpg";
	}

	backgroundImg = loadImage(bg);
	//console.log(backgroundImg);
}