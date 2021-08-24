var backImage;
var tom;
var jerry;

var tomImg;
var tom1;
var tom3;
var jerryImg; 
var jerry1;
var jerry3;


function preload() {
    //Carga aquí las imágenes
    backImage=loadImage("garden.png");
    tom1=loadAnimation("tomeOne.png");
    tomImg =loaAnimation("tomTwo.png");
    tom3=loadAnimation("tomThree.png")
   jerry1=loadAnimation("jerryOne.png");
    jerryImg1 =loadAnimation("jerryTwo.png");
    jerry2=loadAnimation("jerryThree.png")

}

function setup(){
    createCanvas(1000,800);
    //Crea aquí los sprites de Tom y Jerry
    

    jerry=createSprite(870,600);
    jerry.addAnimation("jerry1");


    tom=createSprite(600,600);
    tom.addAnimation("tom1");
    
}

function draw() {
    background (255)
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if (tom.x-jerry.x<(tom.width-mouse.width)/2)[
        tom.velocityX=0
        tom.addAnimation("tom3");
        tom.changeAnimation("tom3");
        tom.x=300,
        tom.scale=0.2 
        jerry.addAnimation("jerry2");
        jerry.changeAnimation("jerry2");
    ]
    drawSprites();
}


function keyPressed(){
    //Escribe aquí el código para la animación de movimiento y cambio
    if(keyCode===LEFT_ARROW){
        jerry.addAnimation("jerryImg1");
        jerry.changeAnimation("jerryImg1");
        jerry.frameDelay=25;

        tom.velocityX=-5

        tom.addAnimation("tomImg");
        tom.changeAnimation("tomImg");
        
    } 
}