var canvas, rect1, rect2, rect3, rect4, movingbox;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1=createSprite(100, 575, 200, 50);
    rect1.shapeColor="green";
    rect2=createSprite(300, 575, 200, 50);
    rect2.shapeColor="red";
    rect3=createSprite(500, 575, 200, 50);
    rect3.shapeColor="orange";
    rect4=createSprite(700, 575, 200, 50);
    rect4.shapeColor="purple";

    movingbox=createSprite(400, 200, 30, 30);
    movingbox.shapeColor="blue";
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingbox.bounceOff(edges);
if (movingbox.isTouching(rect1)){
movingbox.shapeColor="green";
movingbox.velocityX=2;
movingbox.velocityY=-2;
}

if (movingbox.isTouching(rect2)){
movingbox.shapeColor="red";
movingbox.velocityX=0;
movingbox.velocityY=-0;
    
}

if (movingbox.isTouching(rect3)){
movingbox.shapeColor="orange";
movingbox.velocityX=-3;
movingbox.velocityY=-5;
        
}

if (movingbox.isTouching(rect4)){
movingbox.shapeColor="purple";
movingbox.velocityX=6;
movingbox.velocityY=-3;
            
}

if (keyDown("space")){
movingbox.shapeColor="blue";
movingbox.x=400;
movingbox.y=200;
movingbox.velocityY=Math.round(random(-7, 7));
movingbox.velocityX=Math.round(random(-7, 7));
}

drawSprites();
textSize(30);
text ("Press Space To Play", 260, 50);
}