$(document).ready(function() 
{
	// Initialize canvas and context
	var canvas = $("#gameCanvas");
	var context = canvas.get(0).getContext("2d");

	// Canvas dimensions
	var canvasWidth = canvas.width();
	var canvasHeight = canvas.height();

	// Game logic vars
	var play_game;
	var asteroids;       // Array to hold all the asteroids
	var total_asteroids; // Tracks MAX number of asteroids
	var player;          // The player object
	var score;           // Score value
	var score_timeout;
	var num_missiles;

	// Keyboard Input Keycodes using descriptive names
	var arrow_up = 38;
	var arrow_down = 40;
	var arrow_right = 39;
	var space_bar = 32; // new code for space bar put under line 23
	
	// GUI Objects
	var ui = $("#gameUI");
	var uiIntro = $("#gameIntro");
	var uiStats = $("#gameStats");
	var uiComplete = $("#gameComplete");
	var uiPlay = $("#gamePlay");
	var uiReset = $(".gameReset");
	var uiScore = $(".gameScore");
	var uiMissiles = $(".numMissiles");

	// Audio Elements (aka Music and SFX)
	var background_audio = $("#gameSoundBackground").get(0);
	var thruster_sfx = $("#gameSoundThrust").get(0);
	var death_sfx = $("#gameSoundDeath").get(0);

//==========================
// Game Object Constructors
//==========================
	
	var Asteroid = function(x, y, radius, vX)
	{
		// this keyword refers to the current scope
		// in this case that is the scope of the
		// Asteroid Constructor. Scope is defined
		// by the curly braces '{}'
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.vX = vX;
	};

	// Player Constructor
	var Player = function(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 24;
		this.height = 24;
		this.halfWidth = this.width * 0.5;
		this.halfHeight = this.height * 0.5;
		this.vX = 0;
		this.vY = 0;

		this.moveRight = false;
		this.moveUp = false;
		this.moveDown = false;

		this.flameLength = 20;
	};

//=================================
// Game Functions/Methods/Behaviors
//=================================

	// Starts the game and restarts it after
	// a completed playthrough
	function startGame()
	{
		// Reset game stats
		uiScore.html("0");
		uiMissiles.html("3");
		uiStats.show();

		// Set up initial game settings
		play_game = false;
		asteroids = new Array();
		total_asteroids = 10;
		score = 0;
		num_missiles = 3;

		player = new Player(150, canvasHeight * 0.5);

		// Instantiate Asteroid Objects
		for(var i = 0; i < total_asteroids; i++)
		{
			var radius = 5 + (Math.random()*10);
			var x = canvasWidth + radius + Math.floor(Math.random()*canvasWidth);
			var y = Math.floor(Math.random()*canvasHeight);
			var vX = -5 - (Math.random() * 5);

			// Create new instance  of Asteroid object and push it
			// to the back of the asteroids array.
			asteroids.push(new Asteroid(x, y, radius, vX));
		}

		// Missile loop
		function subtract()
		{
			return num_missiles -= 1;
			
		};

		// Setup the keyboard event listeners
		$(window).keydown(function(e)
		{
			var keyCode = e.keyCode;

			if (play_game == false)
			{
				play_game = true;

				// Start the background sound
				background_audio.currentTime = 0;
				background_audio.play();

				//start the animation loop
				animate();

				// Start game timer
				timer();
			}

			if (keyCode == arrow_right)
			{
				player.moveRight = true;

				// Play sound
				if (thruster_sfx.paused)
				{
					thruster_sfx.currentTime = 0;
					thruster_sfx.play();
				};
			}
			else if (keyCode == arrow_up)
			{
				player.moveUp = true;
			}
			else if (keyCode == arrow_down)
			{
				player.moveDown = true;
			}
			
			if (keyCode == space_bar)  // new code for space bar put under line 160
            {
                
                if (num_missiles >= 1)
                {
                	document.getElementById("numMissiles").innerHTML = subtract();	
                }
            }
		}); // End of $(window).keydown(function(e){});
		
		$(window).keyup(function(e)
		{
			var keyCode = e.keyCode;

			if (keyCode == arrow_right)
			{
				player.moveRight = false;

				// Stop sound
				thruster_sfx.pause();
			}

			else if (keyCode == arrow_up)
			{
				player.moveUp = false;
			}
			else if (keyCode == arrow_down)
			{
				player.moveDown = false;
			}
			
		}); // End of $(window).keyup(function(e){});

		// Begins the game's animation loop
		animate();
	
	}; // End of startGame()

	// Initialize game environment
	function init()
	{
		// Hide our End Game UI Elements
		uiStats.hide();
		uiComplete.hide();

		// Click handler for "play game" button
		uiPlay.click(function(e)
		{
			// preventDefault() method stops the default
			// action of an element from happening
			e.preventDefault();

			uiIntro.hide();
			startGame();
		});

		// Click handler for "reset game" button
		uiReset.click(function(e)
		{
			e.preventDefault();
			uiComplete.hide();
			document.getElementById("numMissiles").innerHTML = 3;
			// Stop sound
			thruster_sfx.pause();
			background_audio.pause();

			clearTimeout(score_timeout);

			// Remove the previously attached event handlers
			$(window).unbind("keyup");
			$(window).unbind("keydown");

			startGame();
		});
	}; // End of init()

	function timer()
	{
		if(play_game)
		{
			// setTimeout() method calls a function or evaluates
			// an expression after a specified number of miilliseconds.
			score_timeout = setTimeout(function()
			{
				uiScore.html(++score);

				// Increase number of asteroids over time
				if (score % 5 == 0)
				{
					total_asteroids += 5;
				}

				timer();
			}, 1000);
		}
	}; // End of timer()

	function animate()
	{
		// Clear
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		// Loop through every asteroid
		var asteroidsLength = asteroids.length;

		for (var i = 0; i < asteroidsLength; i++)
		{
			var tmpAsteroid = asteroids[i];

			// Calculate new position
			tmpAsteroid.x += tmpAsteroid.vX;

			// Check to see if you need to reset the asteroid
			if (tmpAsteroid.x + tmpAsteroid.radius < 0)
			{
				tmpAsteroid.radius = 5 + (Math.random() * 10);
				tmpAsteroid.x = canvasWidth + tmpAsteroid.radius;
				tmpAsteroid.y = Math.floor(Math.random() * canvasHeight);
				tmpAsteroid.vX = -5 - (Math.random() * 5);
			}

			// Perform quick calculation to see if the player
			// has collided with the asteroid.
			var dX = player.x - tmpAsteroid.x;
			var dY = player.y - tmpAsteroid.y;
			var distance = Math.sqrt((dX*dX) + (dY*dY));

			// Has there been a collision
			if (distance < player.halfWidth + tmpAsteroid.radius)
			{
				// Stop thruster sound
				thruster_sfx.pause();

				// Play death sfx
				death_sfx.currentTime = 0;
				death_sfx.play();

				// Game Over
				play_game = false;
				clearTimeout(score_timeout);
				uiStats.hide();
				uiComplete.show();

				// Reset audio
				background_audio.pause();

				// Remove keyboard event handlers
				$(window).unbind("keyup");
				$(window).unbind("keydown");
			}

			context.fillStyle = "rgb(255, 255, 255)";
			context.beginPath();
			context.arc(tmpAsteroid.x, tmpAsteroid.y, tmpAsteroid.radius, 0, Math.PI*2, true);
			context.closePath();
			context.fill();
		}; // End of for (var i = 0; i < asteroidsLength; i++)

		// Update player Logic
		player.vX = 0;
		player.vY = 0;

		if (player.moveRight)
		{
			player.vX = 3;
		}
		else
		{
			player.vX = -3;
		};

		if (player.moveUp)
		{
			player.vY = -3;
		};
		if (player.moveDown)
		{
			player.vY = 3;
		};

		player.x += player.vX;
		player.y += player.vY;

		// Player boundary detector
		if (player.x - player.halfWidth < 20)
		{
			player.x = 20 + player.halfWidth;
		}
		else if (player.x + player.halfWidth > canvasWidth - 20)
		{
			player.x = canvasWidth - 20 - player.halfWidth;
		}
		
		if (player.y - player.halfHeight < 20)
		{
			player.y = 20 + player.halfHeight;
		}
		else if (player.y + player.halfHeight > canvasHeight - 20)
		{
			player.y = canvasHeight - 20 - player.halfHeight;
		}

		// Draw player
		if (player.moveRight)
		{
			context.save();
			context.translate(player.x, player.y);

			if (player.flameLength == 20)
			{
				player.flameLength = 15;
			}
			else
			{
				player.flameLength = 20;
			};

			context.fillStyle = "orange";
			context.beginPath();
			context.moveTo(-12 - player.flameLength, 0);
			context.lineTo(0, -5);
			context.lineTo(0, 5);
			context.closePath();
			context.fill();

			context.restore();
		}

		context.fillStyle = "rgb(255, 0, 0)";
		context.beginPath();
		context.moveTo(player.x + player.halfWidth, player.y);
		context.lineTo(player.x - player.halfWidth, player.y - player.halfHeight);
		context.lineTo(player.x - player.halfWidth, player.y + player.halfHeight);
		context.closePath();
		context.fill();

		// Add any new asteroids
		while (asteroids.length < total_asteroids)
		{
			var radius = 5 + (Math.random() * 10);
			var x = Math.floor(Math.random() * canvasWidth) + canvasWidth + radius;
			var y = Math.floor(Math.random() * canvasHeight);
			var vX = -5 - (Math.random() * 5);

			asteroids.push(new Asteroid(x, y, radius, vX));
		};

		if (play_game)
		{
			// Run the animation loop again in 33 milliseconds
			setTimeout(animate, 33);
		};
	
	}; // End of animate()

	init();

});