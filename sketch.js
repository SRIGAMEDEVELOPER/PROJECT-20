var car , wall,weight,speed,deformation;


function setup() {
  
  createCanvas(1600,400);
  
  car = createSprite(50,200,50,20);

  wall =createSprite(1500,200,60,height/2);

  wall.shapeColor=(80,80,80);

  speed=random(55,90);

  car.velocityX=speed;

  weight=random(400,1500);

  deformation=0.5*weight*speed*speed/22500

}

function draw() {
  
  background(0);  
  
  if( wall.x-car.x<wall.width/2+car.width/2){
     
  car.velocityX=0;
  
  if(deformation<100){

    car.shapeColor=color(0,255,0);
 
  }

  if(deformation>99&&(deformation<181)){

    car.shapeColor=color(230,230,0);

   }
  if(deformation>180){

    car.shapeColor=color(255,0,0);

  }
  }

  drawSprites();

}