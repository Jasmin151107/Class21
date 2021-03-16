function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
   fixedRect.debug = true;
    movingRect = createSprite(400,200,80,30);
     movingRect.shapeColor = "green";
     movingRect.debug = true;
gob1 = createSprite(100,100,50,80)
gob1.shapeColor=("green")

     movingRect.velocityX = 2
  fixedRect.velocityX = -2
}

function draw() {
  background(0);  
  if(isTouching(movingRect,gob1)){
    gob1.shapeColor = "red";
    movingRect.shapeColor = "red"
  }
  else{
    gob1.shapeColor = "green";
    movingRect.shapeColor = "green"
  }
  bounce(movingRect,fixedRect);

  //movingRect.x = mouseX
  //movingRect.y = mouseY
  

  
    
    

  drawSprites();
}

