var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Box1, Box2, Box3;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Box1 = createSprite(width/2, height-45, 200, 10, {isStatic:true});
	Box1.shapeColor = color("RED");

	Box2 = createSprite(300, height-90, 10, 100, {isStatic:true});
	Box2.shapeColor = color("RED");

	Box3 = createSprite(500, height-90, 10, 100, {isStatic:true});
	Box3.shapeColor = color("RED");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageBody.velocityY = -12;
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	//Bodies.circle(width/2 , 200 , 5 , {restitution:0.5}); 
	Matter.Body.setStatic(packageBody,false);	    
  }
}