var bullet,wall;
var speed;
var weight;
var width;



function setup() {
  createCanvas(800,400);
  
 wall =createSprite(700, 400, width=random(10,70), 800);
  bullet=createSprite(100, 200, 25, 25);
  bullet.shapeColor="black";
  wall.shapeColor="black";
 speed =random(223,321);  
 weight=random(30,52);
 
}

function draw() {
    background(255,255,255); 
      bullet.velocityX=speed;
    if (wall.x-bullet.x<wall.width/2+bullet.width/2){
        bullet.velocityX=0;
        var deformation=0.5*weight*speed*speed/22509;
      if (deformation>180){  
        wall.shapeColor=color(255,0,0);
      }

      if (deformation<180 && (deformation>100)){
          wall.shapeColor=color(230,230,0);
      } 
        
      
      if (deformation<100){
          wall.shapeColor=color(0,255,0); 
      }
 }
 if (bullet.x>=wall.x){
  wall.shapeColor="red";}

  
 
 if (bullet.x<=wall.x){
  wall.shapeColor="green";}
    drawSprites();
}
