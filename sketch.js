const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop1 = [];
var maxDrops = 100;
var divisionHeight = 300;
function preload(){
 girl = loadImage("../pictures/girl.png");
 drops = loadImage("../pictures/drops.png");
 Thunder1 = loadImage("../pictures/Thunders.png");
}

function setup(){
var canvas = createCanvas(600,600);
engine = Engine.create();
world = engine.world;
girl1 = createSprite(280,480,20,20);
girl1.addImage("Girl",girl);
girl1.scale = .5;


}

function draw(){
background(0);
spawnDrops();
drawSprites();
}   
function spawnDrops(){
    if(frameCount%20===0){
        drop1 = createSprite(170,10,20,20);
        drop1.addImage("Drops",drops);
        drop1.scale = .05;
        drop1.velocityY = 7;
        drop1.lifetime = 50;
        drop1.x = random(170,230);
    }
    if(frameCount%25===0){
        drop2 = createSprite(10,10,20,20);
        drop2.addImage("Drop1",drops);
        drop2.scale = .05;
        drop2.velocityY = 6;
        drop2.lifetime = 75;
        drop2.x = random(10,70);
    }
    if(frameCount%25===0){
        drop3 = createSprite(50,10,20,20);
        drop3.addImage("Drop1",drops);
        drop3.scale = .05;
        drop3.velocityY = 7;
        drop3.lifetime = 75;
        drop3.x = random(50,110);
    } 
    if(frameCount%25===0){
        drop4 = createSprite(110,10,20,20);
        drop4.addImage("Drop1",drops);
        drop4.scale = .05;
        drop4.velocityY = 6;
        drop4.lifetime = 75;
        drop4.x = random(110,170);
    }
    if(frameCount%25===0){
        drop5 = createSprite(230,10,20,20);
        drop5.addImage("Drop1",drops);
        drop5.scale = .05;
        drop5.velocityY = 7;
        drop5.lifetime = 50;
        drop5.x = random(230,300);
    }
    if(frameCount%25===0){
        drop6 = createSprite(300,10,20,20);
        drop6.addImage("Drop1",drops);
        drop6.scale = .05;
        drop6.velocityY = 6;
        drop6.lifetime = 50;
        drop6.x = random(300,370);
    }
    if(frameCount%25===0){
        drop7 = createSprite(370,10,20,20);
        drop7.addImage("Drop1",drops);
        drop7.scale = .05;
        drop7.velocityY = 7;
        drop7.lifetime = 75;
        drop7.x = random(370,450);
    }
    if(frameCount%25===0){
        drop8 = createSprite(450,10,20,20);
        drop8.addImage("Drop1",drops);
        drop8.scale = .05;
        drop8.velocityY = 6;
        drop8.lifetime = 75;
        drop8.x = random(450,520);
    }
    if(frameCount%25===0){
        drop9 = createSprite(520,10,20,20);
        drop9.addImage("Drop1",drops);
        drop9.scale = .05;
        drop9.velocityY = 7;
        drop9.lifetime = 75;
        drop9.x = random(520,590);
    }
    if(frameCount%150===0){
        Thunders = createSprite(300,150,20,20);
        Thunders.addImage("Thunders",Thunder1);
        Thunders.velocity = 4;
        Thunders.lifetime = 12;
    }
    
}


