var canvas;
var music;
var box;
var block1,block2
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box = createSprite(random(20,750),200,20,20);
    box.shapeColor = 'white';
    box.velocityX=3;
    box.velocityY =3;

    block1 = createSprite(92,595,190,35);
    block1.shapeColor='blue';

    block2 = createSprite(297,595,190,35);
    block2.shapeColor='orange';

    block3 = createSprite(505,595,190,35);
    block3.shapeColor='purple';
    
    block4 = createSprite(710,595,190,35);
    block4.shapeColor='green';

   

}

function draw() {
    background(rgb(169,169,169));
    
    
    edges=createEdgeSprites();
    box.bounceOff(edges);


    if(box.isTouching(block1) && box.bounceOff(block1)){
        box.shapeColor='blue';
        music.play();

    }

    if(box.isTouching(block2) && box.bounceOff(block2)){
        box.shapeColor='orange';
        music.stop();
        box.velocityX=0;
        box.velocityY=0;

    }
    
    if(box.isTouching(block3) && box.bounceOff(block3)){
        box.shapeColor='purple' 
        music.play();   
    }
    
    if(box.isTouching(block4) && box.bounceOff(block4)){
        box.shapeColor='green';
    

    }


    
   




 
    //add condition to check if box touching surface and make it box


    drawSprites();
   

}

