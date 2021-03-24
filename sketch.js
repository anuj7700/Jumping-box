var canvas;
var music;
var ball, bluePad, yellowPad, orangePad, pinkPad, rightEdge, leftEdge, topEdge, ball2;
function preload(){
    //load the music
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600, 400);
    rectMode(CORNER);
    //create All neccesary sprites
    ball= createSprite(575, 200, 20, 20);
    ball.shapeColor = "Green";
    ball.velocityX = 0;
    ball.velocityY = 5;
    pinkPad = createSprite(0, 400, 190, 20);
    pinkPad.shapeColor = "Pink";
    orangePad = createSprite(200, 400, 190, 20);
    orangePad.shapeColor = "Orange";
    yellowPad = createSprite(400, 400, 190, 20);
    yellowPad.shapeColor = "Yellow";
    bluePad = createSprite(600, 400, 190, 20);
    bluePad.shapeColor = "Blue";
    leftEdge = createSprite(0, 200, 20, 600);
    leftEdge.shapeColor = "Grey";
    topEdge = createSprite(400, 0, 800, 20);
    topEdge.shapeColor = "Grey";
    rightEdge = createSprite(600, 200, 20, 600);
    rightEdge.shapeColor = "Grey";
    console.log(rectMode);
}
function draw() {
    background(rgb(169,169,169));
    bounceOff();    
    drawSprites();
    console.log("The X of the pinkPad is"  + pinkPad.x + "and the width of the pinkPad is"  + pinkPad.width);
    console.log("The X of the orangePad is"  + orangePad.x + "and the width of the orangePad is"  + orangePad.width);
    console.log("The X of the yellowPad is"  + yellowPad.x + "and the width of the yellowPad is"  + yellowPad.width);
}
function isTouching(){
    //CHECK IF BALL IS TOUCHING PINK PAD
    if(ball.y>=pinkPad.y &&  ball.x<=pinkPad.x){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = pinkPad.shapeColor;  
    }
}
function bounceOff(){
    //Check if ball is touching all edges
    if(ball.x<=20 && ball.y>=20){
        ball.velocityX = getRandomInt(5);
        ball.velocityY = getRandomInt(5);
    }else if(ball.x>=580 && ball.y>=20 && ball.y<=380){
        ball.velocityX = getRandomInt(-5);
        ball.velocityY = getRandomInt(-5);
    }else if(ball.x>=20 && ball.y<=20){
        ball.velocityX = 0;
        ball.velocityY = 5;
    }else if(ball.y>=pinkPad.y-pinkPad.height/2 &&  ball.x<=pinkPad.x+pinkPad.width/2){
        ball.velocityX = getRandomInt(5);
        ball.velocityY = getRandomInt(-5);;
        console.log("Ball's X position is" + ball.x + "and Ball's Y position is" + ball.y); 
        ball.shapeColor = pinkPad.shapeColor;
    }else if(ball.y>=orangePad.y-orangePad.height && ball.x>=orangePad.x - orangePad.width/2 && ball.x<=orangePad.x + orangePad.width/2){
        ball.velocityX = getRandomInt(5);
        ball.velocityY = getRandomInt(-5);
        ball.shapeColor = "Orange";
    }else if(ball.y>=yellowPad.y-yellowPad.height  && ball.x>=yellowPad.x-yellowPad.width/2 && ball.x<=yellowPad.x + yellowPad.width/2){
        ball.velocityX = getRandomInt(5);
        ball.velocityY = getRandomInt(-5);
        ball.shapeColor = "Yellow";
    }else if(ball.y>=bluePad.y-bluePad.height && ball.x<=bluePad.x+bluePad.width/2){
        ball.velocityX = getRandomInt(5);
        ball.velocityY = getRandomInt(-5);
        ball.shapeColor = "Blue";
    }  
}
//give code for random speed of ball
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}