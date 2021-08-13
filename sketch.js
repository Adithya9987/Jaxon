var path
var pathImg,boyImg
var boy,boy_running
var rightBoundary,leftBoundary
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");   
  boy=loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path.png");
  path.velocityY=4;
  path.scale=1.2;
    

  boy=createSprite(100,200);
  boy.scale=0.075
  boy.addAnimation("running",boyImg);



leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible= false


rightBoundary=createSprite(400,0,100,800);
rightBoundary=visible= false
}

function draw() {
  background(0);
  boy.x=World.mouseX

  edges= createEdgeSprites();
  boy.collide(edges[3])
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);


  
if(path.y > 400){
  path.y = height/2;
}
}
