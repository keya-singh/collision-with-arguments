var movingrect, fixedrect ;


function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "blue";

  fixedrect = createSprite (600,400,50,50);
  fixedrect.shapeColor="blue";

  gameobject1= createSprite(100,100,50,50);
  gameobject1.shapeColor="blue";

  gameobject2= createSprite(200,100,50,50);
  gameobject2.shapeColor="blue";

  gameobject3= createSprite(300,100,50,50);
  gameobject3.shapeColor="blue";

  gameobject4= createSprite(400,100,50,50);
  gameobject4.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(isTouching(gameobject2, movingrect))
  {
    movingrect.shapeColor = "pink";
    gameobject2.shapeColor = "pink";
  }
  else
  {
    movingrect.shapeColor = "blue";
    gameobject2.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1, object2)
{
  if (object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
        return true;
  }
  else {
    return false;
  }
}