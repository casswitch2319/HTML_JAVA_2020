var c = document.querySelector('canvas')
var ctx = c.getContext("2d")
var timer = requestAnimationFrame(main)
var gravity = 1
var asteroids = new Array()
var numAsteroids = 10
var gameOver = true
var score = 0
var gameStates = []
var currentState = 0
var ship
var highScore = 0
var mainBGImage = new Image()
mainBGImage.src = "images/rock.jpg"
var asteriodSprite = new Image()
asteriodSprite.src = "images/ast.png"
var shipUser = new Image()
shipUser = "images/ship.png"


//add events to launch game because of images in game (onload event that listens for when image is loaded)

mainBGImage.onload = function(){
    main()
}
asteriodSprite.onload = function(){
    main()
}
shipUser.onload = function(){
    main()
}




function randomRange(high, low) {
    return Math.random() * (high - low) + low;
}

//Class for the Asteroids
function Asteroid() {
    this.radius = randomRange(10, 2)
    this.x = randomRange(c.width - this.radius, 0 + this.radius)
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height
    this.vx = randomRange(-5, -10)
    this.vy = randomRange(10, 5)
    this.color = "white";

    this.draw = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        //ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.drawImage(asteriodSprite, 
            this.x - this.radius, 
            this.y - this.radius,
            this.radius * 2 ,
            this.radius * 2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}

function gameStart() {
    //for loop to create the intances of the asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }

    //create the instance of the ship for the game
    ship = new PlayerShip();
}

//Class for the player ship
function PlayerShip() {
    this.x = c.width / 2;
    this.y = c.height / 2;
    this.w = 30;
    this.h = 30;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;



    this.draw = function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        //this drws the flame behind the ship
        if (this.up == true) {
            ctx.save();
            //adjust the flame length for a flicker effect
            if (this.flamelength == 30) {
                this.flamelength = 10;
            }
            else {
                this.flamelength = 30;
            }
            ctx.fillStyle = "purple";
            ctx.beginPath();
            ctx.moveTo(0, this.flamelength);
            ctx.lineTo(5, 5);
            ctx.lineTo(-5, 5);
            ctx.lineTo(0, this.flamelength);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        /*this.draw = function(){
            ctx.save()
            ctx.drawImage(shipUser, this.x, this.y,this.w,this.h)
            ctx.restore()
        }*/
     ctx.beginPath();

        ctx.fillStyle = "red";
        ctx.moveTo(0, -13);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.lineTo(0, -13);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;

        //adds boundaries and keeps ship on the screen
        if (this.y > c.height - 20) {
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if (this.y < 0 + 13) {
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if (this.x > c.width - 10) {
            this.x = c.width - 10;
            this.vx = 0;
        }
        //left side
        if (this.x < 0 + 10) {
            this.x = 10;
            this.vx = 0;
        }
    }
}

//create the instance of the ship for the game
var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function keyPressDown(e) {
    //console.log("Key Down " + e.keyCode);
    if (gameOver == false) {
        if (e.keyCode === 38) {

            ship.up = true
        }
        if (e.keyCode === 37) {
            ship.left = true
        }
        if (e.keyCode === 39) {
            ship.right = true
        }
    }
    if (gameOver == true) {
        if (e.keyCode === 13) {

            if (currentState == 2) {

                currentState = 0
                score = 0
                numAsteroids = 10
                asteroids = []
                gameStart()
                main()
                

            }
            else {
                gameStart()
                gameOver = false
                currentState = 1
                main()
                scoreTimer()
            }

        }
    }

}

function keyPressUp(e) {
    if (gameOver == false) {
        //console.log("Key Up " + e.keyCode);
        if (e.keyCode === 38) {
            ship.up = false
        }
        if (e.keyCode === 37) {
            ship.left = false
        }
        if (e.keyCode === 39) {
            ship.right = false
        }
    }
}
//game states for menues and game play 
gameStates[0] = function () {
    ctx.save()
    ctx.drawImage(mainBGImage,0,0,c.width, c.height)
    ctx.font = "30px Ubuntu Mono"
    ctx.fillStyle = 'white'
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", c.width / 2, c.height / 2 - 30)
    ctx.font = "15px Ubuntu Mono"
    ctx.fillText("Press Enter To Start", c.width / 2, c.height / 2 + 20)
    ctx.restore()
}

gameStates[1] = function () {
    //where game code goes
    //display score
    ctx.save();

    ctx.font = "15px Ubuntu Mono"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), c.width - 150, 30)
    ctx.restore()

    //ship.vy += gravity;

    if (ship.up == true) {
        ship.vy = -10;
    }
    else {
        ship.vy = 3;
    }

    if (ship.left == true) {
        ship.vx = -3;
    }
    else if (ship.right == true) {
        ship.vx = 3;
    }
    else {
        ship.vx = 0;
    }

    for (var i = 0; i < asteroids.length; i++) {
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX * dX) + (dY * dY));

        //checks for collision with asteroid and ends game
        if (detectCollision(dist, (ship.h / 2 + asteroids[i].radius))) {
            // console.log("We collided with Asteroid " + i);
            gameOver = true;
            currentState = 2
            //document.removeEventListener('keydown', keyPressDown);
            //document.removeEventListener('keyup', keyPressUp);
        }

        //checks to see if asteroid is off screen
        if (asteroids[i].y > c.height + asteroids[i].radius) {
            //reset steroids position off screen 
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius) - c.height;
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        if (gameOver == false) {
            asteroids[i].y += asteroids[i].vy;
        }
        asteroids[i].draw();
    }

    ship.draw();
    if (gameOver == false) {
        ship.move();
    }
    while (asteroids.length < numAsteroids) {
        asteroids.push(new Asteroid());
    }
}

gameStates[2] = function () {

    if (score > highScore) {
        //set high score 
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = 'white'
        ctx.textAlign = "center"
        ctx.fillText("Game Over Your Score Was : " + score.toString(), c.width / 2, c.height / 2 - 60)
        ctx.fillText("Your New High Score is : " + highScore.toString(), c.width / 2, c.height / 2 - 30)
        ctx.fillText("New Record : " + highScore.toString(), c.width / 2, c.height / 2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Enter To Play Again", c.width / 2, c.height / 2 + 20)
        ctx.restore()
    }
    else {
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = 'white'
        ctx.textAlign = "center"
        ctx.fillText("Game Over Your Score Was : " + score.toString(), c.width / 2, c.height / 2 - 60)
        ctx.fillText("Game Over Your High Score Was : " + highScore.toString(), c.width / 2, c.height / 2 - 30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Enter To Play Again", c.width / 2, c.height / 2 + 20)
        ctx.restore()
    }
}

function main() {
    ctx.clearRect(0, 0, c.width, c.height);
    if(gameOver == false){
    timer = requestAnimationFrame(main);
}
    gameStates[currentState]()
}

function scoreTimer() {
    if (gameOver == false) {
        score++;
        //console.log(score);
        if (score % 5 == 0) {
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer, 1000);
    }
}
//scoreTimer();

function detectCollision(distance, calcDistance) {
    return distance < calcDistance;
}
