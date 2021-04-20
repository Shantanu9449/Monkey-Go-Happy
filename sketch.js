
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivaltime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 400);
  
monkey = createSprite (80, 315, 20, 20)
  monkey.addAnimation ("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
   ground.x = width /2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}





function draw() {
  background("orange")
  
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivaltime, 500,50);
  
   
  
  
  if(ground.x < 0 ){ground.x = width /2;}
  spawnBananas();
  spawnobstacles();
  
   if(keyDown("space")) {
      
      monkey.velocityY = -15;
   
      
    }
    
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  drawSprites();
  
  }

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,200,40,10);
     banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    

   
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}

function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
     obstacles = createSprite(600,330,40,10);
     obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    

   
    //adding cloud to the group
   obstacleGroup.add(obstacles);
    }
}




  
  
  







