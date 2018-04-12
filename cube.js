var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var startX = (canvas.width/2)-(radius/2);
var startY = (canvas.height/2)-(radius-2) ;
var d = 5;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;
  }

  else if(e.keyCode == 37){
    leftPressed = true;
  }

  else if(e.keyCode == 38){
    upPressed = true;
  }
  else if(e.keyCode == 40){
    downPressed = true;
  }

}

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;
  }

  else if(e.keyCode == 37){
    leftPressed = false;
  }

  else if(e.keyCode == 38){
    upPressed = false;
  }
  else if(e.keyCode == 40){
    downPressed = false;
  }

}
/*
function collision(){
  if(startX < )



}
*/

function drawSmallBox(){
ctx.beginPath();
ctx.rect(startX,startY,radius,radius);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
}



function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
drawSmallBox();
if(leftPressed){
    startX = startX-d;
}
else if(rightPressed){
  startX = startX+d;
}
else if(upPressed){
  startY = startY-d;
}
else if(downPressed){
  startY = startY+d;
}
requestAnimationFrame(draw);
}
draw();
