var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 30;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var startX;
var startY;

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


function drawSmallBox(){
ctx.beginPath();
ctx.rect((canvas.width/2)-(radius/2),(canvas.height/2)-(radius-2),radius,radius);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
}
drawSmallBox();


function draw(){
c.clearRect(0,0,canvas.width,canvas.height);
if(rightPressed && startX <= canvas.height-radius){
  startX += 7;
}
else if(leftPressed && startX < 0){
  startX -=7;
}

}
