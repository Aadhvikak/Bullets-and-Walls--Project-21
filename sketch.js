var bullet, wall;
var speed, weight, thickness;
var Canvas_height, Canvas_width;
var deformation,damage;
var invisiline;

function setup() {
  //createSprite(400, 200, 50, 50);

  Canvas_height = 400;
  Canvas_width = 1600;
  createCanvas(Canvas_width,Canvas_height);


  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(44,83);

  invisiline = createSprite(1200,200,10,400);
  invisiline.visible = false;

  bullet= createSprite(50,200,65,30);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  bullet.weight = weight;
  bullet.speed = bullet.velocityX;
  

 
  //bullet.debug = true;

  wall = createSprite(1200,200,thickness,Canvas_height/2);
  wall.shapeColor = 80,80,80;
 // wall.debug = true;
  
  wall.thickness = thickness;                            

  }
function draw() {
  background("black");  

  if((wall.x - bullet.x) < (bullet.width/2 + wall.width/2)) {
    deformation = 0.5 * weight * speed * speed / 22500;
    bullet.shapeColor = "white";
   if (deformation < 100) {
     bullet.shapeColor = "green";
   }
   if (deformation > 100 && deformation < 180) {
     bullet.shapeColor = "yellow";
   }
   if (deformation > 180) {
     bullet.shapeColor = "red";
   }
   
  }

  if((wall.x - bullet.x) < (bullet.width/2 + wall.width/2)) {
    
    damage = (0.5 * bullet.weight * bullet.speed * bullet.speed) /( wall.thickness * wall.thickness * wall.thickness);
    wall.shapeColor = 80,80,80;

    if (damage <= 10) {
     wall.shapeColor = "green";
   }
    if (damage > 10) {
     wall.shapeColor = "red";
   }
   
  }
  
  bullet.collide(invisiline);

  drawSprites();
}