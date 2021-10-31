var issimg,spacebgimg
var spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img
var asteroid1img, asteroid2img,asteroid3img,asteroid4img
var iss, spacecraft,asteroid1,asteroid2,asteroid3,asteroid4
var hasDocked = false

function preload() {
issimg = loadImage("iss.png");
spacebgimg = loadImage("spacebg.jpg")
spacecraft1img = loadImage("spacecraft1.png")
spacecraft2img = loadImage("spacecraft2.png")
spacecraft3img = loadImage("spacecraft3.png")
spacecraft4img = loadImage("spacecraft4.png")
asteroid1img = loadImage("asteroid.png")
asteroid2img = loadImage("asteroid2.png")
asteroid3img = loadImage("asteroid3.png")
asteroid4img = loadImage("asteroid4.png")
}


function setup() {
  createCanvas(900,600);
  spacecraft = createSprite(400, 400, 50, 50)
  spacecraft.addImage("1",spacecraft1img)
  spacecraft.addImage("2",spacecraft2img)
  spacecraft.addImage("3",spacecraft3img)
  spacecraft.addImage("4",spacecraft4img)
  spacecraft.scale = 0.25
  iss = createSprite(400, 300, 50, 50);
  iss.addImage("iss",issimg);
  iss.scale = 0.9
  asteroid1 = createSprite(100, 150, 50, 50)
  asteroid1.addImage("asteroid1",asteroid1img)
  asteroid1.scale = 0.5
  //asteroid1.debug = true
  asteroid1.setCollider("circle",0,0,80);

  asteroid2 = createSprite(750, 100, 50, 50)
  asteroid2.addImage("asteroid2",asteroid2img)
  asteroid2.scale = 0.2
  //asteroid2.debug = true
  asteroid2.setCollider("circle",0,0,290);

  asteroid3 = createSprite(350,80, 50, 50)
  asteroid3.addImage("asteroid3",asteroid3img)
  asteroid3.scale = 0.5
  //asteroid3.debug = true
  asteroid3.setCollider("rectangle",10,30,180,80,-45);

  asteroid4 = createSprite(800, 280, 50, 50)
  asteroid4.addImage("asteroid4",asteroid4img)
  asteroid4.scale = 0.7
  //asteroid4.debug = true
  asteroid4.setCollider("circle",30,0,80);

  if(!hasDocked){
    spacecraft.x = random(30,860)
  }
}

function draw() {
  background(spacebgimg); 
  
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.changeAnimation("3")
    spacecraft.x -= 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.changeAnimation("4")
    spacecraft.x += 2
  }
  if(keyIsDown(UP_ARROW)){
    spacecraft.changeAnimation("2")
    spacecraft.y -= 2
  }
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.changeAnimation("1")
  }
  if(spacecraft.x <= (iss.x-10) && spacecraft.y <= (iss.y+90)){
    textSize(30);
    fill("white")
    text("Docking Successful!", 300, 450);
    hasDocked = true;
  }
  if(spacecraft.isTouching(asteroid1)){
    textSize(30);
    fill("white")
    text("YOU HIT THE ASTEROID", 300, 500);
  }
  if(spacecraft.isTouching(asteroid2)){
    textSize(30);
    fill("white")
    text("YOU CRASHED", 300, 530);
  }
  if(spacecraft.isTouching(asteroid3)){
    textSize(30);
    fill("white")
    text("OH NO! You hit the asteroid", 300, 550);
  }
  if(spacecraft.isTouching(asteroid4)){
    textSize(30);
    fill("white")
    text("whoops you've crashed!", 300, 570);
  }
  textSize(20);
  fill("white")
  text("This simulation will help you to practice your docking skils! Dont hit the asteroids! Good luck!",20,20)
  drawSprites();
}