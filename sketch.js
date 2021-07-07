var fixedRect,movingRect,fixedRect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2= createSprite(600, 200, 50, 80);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
if(movingRect.x-fixedRect2.x>fixedRect2.width/2+movingRect.width/2){
  movingRect.shapeColor="blue";
  fixedRect2.shapeColor="blue";
}

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
