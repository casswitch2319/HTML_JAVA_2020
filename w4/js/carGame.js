//JavaScript goes here//

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var spyro = new Image();
spyro.src = 'images/spyro.png';
//this will start the timer for animation//
var timer = requestAnimationFrame(draw);


var SL = new Image();
SL.src = 'images/starttt.jpg';
//this will start the timer for animation//
var timer = requestAnimationFrame(draw);

var FL = new Image();
FL.src = 'images/finishhh.jpg';
//this will start the timer for animation//
var timer = requestAnimationFrame(draw);

var cloud = new Image();
cloud.src = 'images/cloud.png';
//this will start the timer for animation//
var timer = requestAnimationFrame(draw);

var x = 0;

//values represent x value of the start and finish line//
var start = 58;
var finish = 956;

//fuel values//
var startFuel = 860;
var fuel = startFuel;

var barFuelWidth = 512;

//start timer stuff
var sec = 3;
var fps = 60;
var frames = fps;


function draw() {
    //this will call the animation again///
    timer = requestAnimationFrame(draw);
    //clear the screen//
    ctx.clearRect(0, 0, c.width, c.height)


    //draws text//
    ctx.fillStyle = 'white';
    ctx.lineWidth = 1;
    ctx.font = '60px Amatic SC';
    ctx.textAlign = 'center';
    ctx.fillText('Do you win?', c.width / 2, 60);
    ctx.strokeText('Do you win?', c.width / 2, 60);




    drawStartLine();
    drawFinishLine();
    drawCar();
    drawCloud();
    drawSprite();
   
    drawFuelBarBackground();
    drawFuelBar();
    drawFuelText();


    //updates x//

    if (sec > 0) {
        runStartTimer();
        drawStartTimer();
    }

    else {
        if (fuel > 0) {
            x += .5;
            fuel -= .5;
        }
    }



    //checks to see when we run out of fuel or pass finish line//

    if (fuel <= 0 || x + 100 > finish) {
        drawResults();

    }

}

function runStartTimer() {
    frames -= 1;
    //cooldown state//
    if (frames < 0) {
        frames = fps;
        sec -= 1;
    }
}

function drawStartTimer() {
    ctx.fillStyle = 'pink';
    ctx.font = '90px Amatic SC';
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width / 2, c.height / 2)
}

function drawResults() {
    if (x + 100 > finish) {
        ctx.fillStyle = 'hotpink';
        ctx.font = '90px Amatic SC';
        ctx.textAlign = "center"
        ctx.fillText('You Made It! You Win!', c.width / 2, c.height / 2)
    }
    else {
        ctx.fillStyle = 'hotpink';
        ctx.font = '90px Amatic SC';
        ctx.textAlign = "center"
        ctx.fillText('You Ran Out of Fuel, You Lost ):', c.width / 2, c.height / 2)
    }
}

function drawCloud() {
    ctx.drawImage(cloud, x, 150, 350, 200)
}

function drawSprite() {
    //drawing the image//
    ctx.drawImage(spyro, x, 200, 300, 150);
   

}

function drawCar() {
    ctx.fillStyle = 'pink'
    ctx.fillRect(x, c.height / 2, 150, 20);


}

function drawStartLine() {
    ctx.fillStyle = '#e2bbf5';
    ctx.fillRect(start, 110, 10, 400);
    ctx.drawImage(SL, start, 110, 30, 500)

}

function drawFinishLine() {
    ctx.fillStyle = '#680596';
    ctx.fillRect(finish, 110, 10, 400);
    ctx.drawImage(FL, finish, 110, 30, 500)
}
function drawFuelBarBackground() {
    ctx.fillStyle = 'hotpink'
    ctx.fillRect(35, 70, 555, 30);
}

function drawFuelBar() {
    var currentBarWidth = barFuelWidth * getFuelPercent();
    ctx.fillStyle = 'lime';
    ctx.fillRect(start, 75, currentBarWidth, 20);
}





function drawFuelText() {
    ctx.fillStyle = 'hotpink';
    ctx.font = '30px Amatic SC'
    ctx.fillText(fuel.toFixed(0), start, 45);
}

function getFuelPercent() {
    return fuel / startFuel;

}