//JavaScript goes here//

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function draw(){
    //draw a box//
    ctx.fillStyle = 'teal'
    ctx.fillRect(200,100,200,200);
//draw a line//
ctx.strokeStyle = 'purple'
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.stroke();

ctx.moveTo(800,0);
ctx.lineTo(0,600);
ctx.stroke();

//draw circle//
ctx.fillStyle = 'purple'
ctx.strokeStyle ="orange"
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, 19,0,2*Math.PI, false);
ctx.stroke();
ctx.fill()


}

draw();