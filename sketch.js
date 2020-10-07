var bullet,bullet2,bullet3,wall,wall2,wall3,thickness,thickness2,thickness3;
var speed,speed2,speed3,weight,weight2,weight3;
var border;

function setup() {
  createCanvas(1950,1000);

  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);

  speed2=random(55,90);
  weight2=random(400,1500);

  bullet2=createSprite(50,500,50,50);

  speed3=random(55,90);
  weight3=random(400,1500);

  bullet3=createSprite(50,800,50,50);

wall=createSprite(1550,200,1,1)
bullet.velocityX = speed;
thickness=random(22,83);

wall=createSprite(1200,200,thickness,200)
speed=random(223,321);
weight=random(30,52);

wall2=createSprite(1550,500,1,1)
bullet2.velocityX = speed2;
thickness2=random(22,83);

wall2=createSprite(1200,500,thickness2,200)
speed2=random(223,321);
weight2=random(30,52);

wall3=createSprite(1550,800,1,1)
bullet3.velocityX = speed3;
thickness3=random(22,83);

wall3=createSprite(1200,800,thickness3,200)
speed3=random(223,321);
weight3=random(30,52);

border=createSprite(width/2,30,width,5);
border.shapeColor="white";

border=createSprite(width/2,350,width,5);
border.shapeColor="white";

border=createSprite(width/2,650,width,5);
border.shapeColor="white";

border=createSprite(width/2,950,width,5);
border.shapeColor="white";

}

function draw() {
  background("black");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/3){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    
    }
    if (deformation>180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    
    }
    if (deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    
    }
    if (hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    }

    /////////////////////////////////////////////////////////
   
    if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/3){
      bullet2.velocityX=0
      var deformation2=0.5*weight2*speed2*speed2/22500;
      if (deformation2>180)
      {
        bullet2.shapeColor=color(255,0,0);
      
      }
      if (deformation2>180 && deformation2>100)
      {
        bullet2.shapeColor=color(230,230,0);
      
      }
      if (deformation2<100)
      {
        bullet2.shapeColor=color(0,255,0);
      
      }

    }
      if (hasCollided2(bullet2,wall2))
      {
        bullet2.velocityX=0;
        var damage2=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);
  
      
      if(damage2>10)
      {
        wall2.shapeColor=color(255,0,0);
  
      }
  
  
      if(damage2<10)
      {
        wall2.shapeColor=color(0,255,0);
      }
      }

  }

  //////////////////////////////////////////////////////////////

  if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/3){
    bullet3.velocityX=0
    var deformation3=0.5*weight3*speed3*speed3/22500;
    if (deformation3>180)
    {
      bullet3.shapeColor=color(255,0,0);
    
    }
    if (deformation3>180 && deformation3>100)
    {
      bullet3.shapeColor=color(230,230,0);
    
    }
    if (deformation3<100)
    {
      bullet3.shapeColor=color(0,255,0);
    
    }
    if (hasCollided3(bullet3,wall3))
    {
      bullet3.velocityX=0;
      var damage3=0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3);

    
    if(damage3>10)
    {
      wall3.shapeColor=color(255,0,0);

    }


    if(damage3<10)
    {
      wall3.shapeColor=color(0,255,0);
    }
    }

  
}

   drawSprites();

}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
return false;
}

function hasCollided2(lbullet2,lwall2)
{
  bulletRightEdge2=lbullet2.x+lbullet2.width;
  wallLeftEdge2=lwall2.x;
  if(bulletRightEdge2>=wallLeftEdge2)
  {
    return true;
  }
return false;
}

function hasCollided3(lbullet3,lwall3)
{
  bulletRightEdge3=lbullet3.x+lbullet3.width;
  wallLeftEdge3=lwall3.x;
  if(bulletRightEdge3>=wallLeftEdge3)
  {
    return true
  }
return false;
}
