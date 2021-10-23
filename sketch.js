var ana
var jose

function setup() {

  createCanvas(800,400);
  ana =  createSprite(400, 200, 50, 50);
  ana.shapeColor = "green"
  ana.debug = true
  jose = createSprite(200,400,70,70);
  jose.shapeColor = "blue"
  jose.debug = true


}

function draw() {
  background(255,255,255);  
  jose.x = World.mouseX;
  jose.y = World.mouseY;

  if(jose.isTouching(ana)){
jose.shapeColor = "red"
ana.shapeColor = "orange"

  }else{
    jose.shapeColor = "blue"
    ana.shapeColor = "green"
  }
  drawSprites();
}