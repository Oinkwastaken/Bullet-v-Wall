var car,thickness,health
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  thickness=random(22,35)
  speed=random(123,221)
  weight=random(30,40)
 
  bullet=createSprite(50,200,10,weight/10)
  wall=createSprite(1200,200,thickness,200)
  bullet.velocityX=speed/15
  hole=createSprite(1200,200,thickness,20)
  hole.visible=false
  hole.shapeColor=(255,255,255)
  damage=weight*speed*speed*0.5/thickness*thickness*thickness
}

function draw() {
  background(255,255,255);
  
  collided()
  drawSprites();
  }
function collided() {
    if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2){
       if(damage>15000000){
         text("The bullet broke the wall",800,200)
         hole.visible=true
       }
       if (damage<15000000){
         text("The wall withstood the bullet",800,200)
       }
       text(damage,100,100)
       drawSprites();
       end
      }
}