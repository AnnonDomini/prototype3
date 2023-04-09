var player;
var loadScreen;
var gameState = "path1Screen";
var path1,path2,path3,path4;
var path2Scoller;
var path4Scene;
var path1Stairs,path1Arena;
var path1X,path1Y;
var x, y;
var WeaponRank;
var treasure;
var Enemy1, Enemy2, Enemy3, Enemy4;
var enemyScale = 5;
var path3Scene;
var path2background;




function preload(){
WeaponRank = 0
playerMoving = loadAnimation("walk_knight_1.png","walk_knight_2.png","walk_knight_3.png","walk_knight_4.png","walk_knight_5.png","walk_knight_6.png","walk_knight_7.png","walk_knight_8.png"
,"walk_knight_9.png","walk_knight_10.png","walk_knight_11.png","walk_knight_12.png")
loadScreen1 = loadImage("assets/load screen.jfif")
mapImage = loadImage("assets/map.jfif")
path2Scoller = loadImage("Background/layer_2.png")
path4Scene = loadImage("assets/path4.png")
path1Stairs = loadImage("assets/temple scene.png")
path1Arena =loadImage("assets/temple scene arena.png")
treasure = loadImage("assets/bag_1.png")
path1X = width/2+900
path1Y =height/2+300
Enemy1 = loadImage("assets/torch.png")
path3Scene = loadImage("assets/scene3.jfif")
Enemy2 = loadImage("assets/zombie.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  /*player = createSprite(width/2-500,height/2,100,100)
  player.addAnimation("moving",playerMoving)
  player.scale=3.5*/

  if(gameState==="start"){
    var Screen1 = createSprite(width/2-200,height/2)
    Screen1.addImage(loadScreen1)
    Screen1.scale=2.5
    var map = createSprite(width/2+500,height/2)
    map.addImage(mapImage)
    map.scale=1
    var path1 = createSprite(width/2+400,height/2-100,50,50)
    path1.shapeColor="yellow"
    var path2 = createSprite(width/2+600,height/2-100,50,50)
    path2.shapeColor="yellow"
    var path3 = createSprite(width/2+400,height/2+100,50,50)
    path3.shapeColor="yellow"
    var path4 = createSprite(width/2+600,height/2+100,50,50)
    path4.shapeColor="yellow"
  /*  this.path1.mousePressed(() => {
      gameState = "path1Screen"
    });*/
    
    if(path1.x === mouseX && path1.y === mouseY){
      gameState = "path1Screen"
    }
  
    if(path2.x === mouseX && path2.y === mouseY){
      gameState = "path2Screen"
    
    }
  
    if(path3.x === mouseX && path3.y === mouseY){
      gameState = "path3Screen"
    }
  
    if(path4.x === mouseX && path4.y === mouseY){
      gameState = "path4Screen"
    }
  }

  if(gameState === "path3Screen"){
    /*for (var i = 0; i < 5; i=0) {
      var Screen1 = createSprite(width/2-200,height/2)
      Screen1.addImage(path3Scene)
      Screen1.scale=15
     // background("black")
       Screen1.velocityX=-4
    }*/
  var Screen1 = createSprite(width/2-200,height/2)
  Screen1.addImage(path3Scene)
  Screen1.scale=15
  var enemy = createSprite(width/2-1000,0)
  enemy.addImage(Enemy1)
  enemy.velocity.y = +10
 // background("black")
   Screen1.velocityX=-4
   enemy.scale=20
   player.depth = Screen1.depth+2
   player.scale=20
  }

  if(gameState === "path2Screen"){
    /*for (var i = 0; i < 5; i=0) {
      var Screen1 = createSprite(width/2-200,height/2)
      Screen1.addImage(path2Scoller)
      Screen1.scale=25
     // background("black")
       Screen1.velocityX=-4
    }*/
  var Screen1 = createSprite(width/2-200,height/2)
  Screen1.addImage(path2Scoller)
  Screen1.scale=25
 // background("black")
   Screen1.velocityX=-4
   
  }
  /*if(gameState==="path1Screen"){
    var squariad=createSprite(1566, 1566, 100, 100)  
    squariad.velocity.y = 10
    edges=createEdgeSprites()
    squariad.bounceOff(edges)
    squariad.depth=109
  }*/
  if(gameState==="path1Screen"){
  
    var Screen1 = createSprite(width/2,height/2)
    Screen1.addImage(path1Arena)
    Screen1.depth=100
    Screen1.scale=1
    var reward = createSprite(width/2,height/2)
    reward.addImage(treasure)
    reward.scale = 4
    
    player = createSprite(x,height/2,100,100)
    x = width/2+500
    player.addAnimation("moving",playerMoving)
    player.scale=3.5
    player.depth=Screen1.depth
    player.depth+=10
    x = width+100
    y= height/2
    if(keyIsDown(RIGHT_ARROW) ){
      this.player.x+=10
      this.player.drawSprites

    }
  

    
    var squariad=createSprite(width/2-200,  height/2+400, 100, 100)  
    squariad.velocity.y = -10
    edges=createEdgeSprites(3180,3180)
    squariad.bounceOff(edges)
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+400, 100, 100)  
    squariad.velocity.y = -10
    edges=createEdgeSprites(3180,3180)
    squariad.bounceOff(edges)
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2-200,  height/2+2000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+2000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+3000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+4000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+5000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale
    var squariad=createSprite(width/2+200, height/2+6000, 100, 100)  
    squariad.velocity.y = -10
    squariad.addImage(Enemy1)
    squariad.scale=enemyScale

  



   
     
  }
  if(gameState === "path4Screen"){
    var Screen1 = createSprite(1200,height/2)
    Screen1.addImage(path4Scene)
    Screen1.scale=13
    var Screen1 = createSprite(width-1000,height/2)
    Screen1.addImage(path4Scene)
    Screen1.scale=13
    var player = createPlayer(width/2,height/2)
   player.scale=7
    player.depth=Screen1.depth+10
    enemy = createSprite(width/2-600,height/2-700)
    enemy.addImage(Enemy2)
    enemy.scale=0.5
    enemy.velocity.y=+2
    enemy.velocity.x=+3
  
  }
}


function draw(){
  background("black")

/*if(gameState==="start"){
  var Screen1 = createSprite(width/2-200,height/2)
  Screen1.addImage(loadScreen1)
  Screen1.scale=2.5
  var map = createSprite(width/2+500,height/2)
  map.addImage(mapImage)
  map.scale=1
  var path1 = createSprite(width/2+400,height/2-100,50,50)
  path1.shapeColor="yellow"
  var path2 = createSprite(width/2+600,height/2-100,50,50)
  path2.shapeColor="yellow"
  var path3 = createSprite(width/2+400,height/2+100,50,50)
  path3.shapeColor="yellow"
  var path4 = createSprite(width/2+600,height/2+100,50,50)
  path4.shapeColor="yellow"
/*  this.path1.mousePressed(() => {
    gameState = "path1Screen"
  });*/
  
 /* if(path1.x === mouseX && path1.y === mouseY){
    gameState = "path1Screen"
  }

  if(path2.x === mouseX && path2.y === mouseY){
    gameState = "path2Screen"
  
  }

  if(path3.x === mouseX && path3.y === mouseY){
    gameState = "path3Screen"
  }

  if(path4.x === mouseX && path4.y === mouseY){
    gameState = "path4Screen"
  }
}*/
  
 /* onclick((this.path4,MouseEvent("click"))=>{
    gameState : "path4Screen"
  })*/
   

/*if(gameState==="path1Screen"){
  
  var Screen1 = createSprite(width/2,height/2)
  Screen1.addImage(path1Arena)
  Screen1.depth=100
  Screen1.scale=1
  

  player.depth=Screen1.depth
  player.depth+=10

  var squariad=createSprite(180, 50, 100, 100);  
  squariad.velocity.y = 10;
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  squariad.depth=Screen1.depth+100
 
   
}
if(gameState==="path2Screen"){
 
   
}*/

if(gameState==="path3Screen"){

}
/*if(gameState === "path4Screen"){
  var Screen1 = createSprite(1200,height/2)
  Screen1.addImage(path4Scene)
  Screen1.scale=13
  var Screen1 = createSprite(width-1000,height/2)
  Screen1.addImage(path4Scene)
  Screen1.scale=13
 player.scale=7
  player.depth=Screen1.depth+10
  enemy = createSprite(width/2-600,height/2-700)
  enemy.addImage(Enemy2)
  enemy.scale=0.5
  enemy.velocity.y=+10
  enemy.velocity.x=+10

}*/
fill("red")
text(mouseX+mouseY,50,50)
drawSprites()
}

function createPlayer(x,y){
  player =createSprite(x,y)
  player.addAnimation(playerMoving)
}

