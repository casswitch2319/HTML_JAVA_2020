//JavaScript goes here//

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image ();
mario.src = 'images/mario2.png';
//this will start the timer for animation//
var timer = requestAnimationFrame(draw);

var x = 0;



function draw(){
    //this will call the animation again///
    timer = requestAnimationFrame(draw);
    //clear the screen//
    ctx.clearRect(0,0,c.width, c.height)
x++;

//conditonal statement
if(x>c.width){
    x = -200
}

    /*

    //draw everything to the screen//


//draw a line//
ctx.strokeStyle = 'purple'
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.stroke();

ctx.moveTo(800,0);
ctx.lineTo(0,600);
ctx.stroke();
    //draw a box//
    ctx.fillStyle = 'teal'
    ctx.fillRect(200,100,200,200);
//draw circle//
ctx.lineWidth = 5
ctx.fillStyle = 'aqua'
ctx.strokeStyle ="pink"
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, 19,0,2*Math.PI, false);
ctx.fill()
ctx.stroke();

*/
//drawing the image//
ctx.drawImage(mario, x, 100,200, 200);

//draws text//
ctx.lineWidth = 1;
ctx.font = '50px Arial';
ctx.textAlign = 'center';
ctx.fillText('Week 4 Lab', c.width/2, 50);
ctx.strokeText('Week 4 Lab', c.width/2, 50);

console.log('we are animating');



}

draw();