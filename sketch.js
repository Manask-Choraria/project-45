var player,ground,coinsGroup,obstaclesGroup,obstacleImg,coinsImg,groundImg;

function preload(){
  obstacleImg = loadImage("Images/Pad_01_2.png")
  coinsImg = loadImage("Images/Coin_03.png")
  groundImg = loadAnimation("Images/road1.png","Images/road.png")

}

function setup() {
  createCanvas(600,800);
 ground = createSprite(100,200);
 ground.velocityY = 2;
 ground.addAnimation("r",groundImg);
 player = createSprite(300, 700, 50, 50);
 coinsGroup = new Group()
 obstaclesGroup = new Group();
}

function draw() {
  background(0); 
 // if(ground.y>450){
  //  ground.y = ground.height/2;
//  }

  
  generateCoins();
  createObstacles();

  drawSprites();
  text(mouseX+","+ mouseY,mouseX,mouseY);

}
function keyPressed(){
  if(keyCode ===RIGHT_ARROW && player.x<450){
    player.x += 150;

  }
  else if(keyCode ===LEFT_ARROW && player.x>150){
    player.x -= 150;
  }
}   

//coins will be generated through this  function
function generateCoins(){
    if(frameCount%60 === 0){
       coins = createSprite(50,0,10,10);
       coins.addImage(coinsImg);
       var number = Math.round(random(1,3))
       switch(number){
         case 1:coins.x = 150
         break;
         case 2:coins.x = 300
         break;
         case 3:coins.x = 450
         break;
       }
       coins.velocityY = 10;
       coins.lifetime = 350;
       coins.scale = 0.1;
       coinsGroup.add(coins)
    }
}

function createObstacles(){
  if(frameCount%95 === 0){
    obstacles = createSprite(50,0,20,10);
    obstacles.addImage(obstacleImg);
    var number = Math.round(random(1,3))
    switch(number){
      case 1:obstacles.x = 150;
      break;
      case 2:obstacles.x = 300;
      break;
      case 3:obstacles.x = 450;
      break;
    }
    obstacles.velocityY = 10;
    obstacles.lifetime = 350;
    obstacles.scale = 0.2;
    obstaclesGroup.add(obstacles);
  }
}