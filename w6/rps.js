var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "35px Xanh Mono";
ctx.fillStyle = 'aqua';
ctx.textAlign = 'center';


//array of choices 
var rps = [];
rps[0] = 'ROCK'
rps[1] = 'PAPER'
rps[2] = 'SCISSORS'

//array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//when button is clicked play game
//event listeneer for rock
btn[0].addEventListener('click', function (e) {
    play(0);
});
//event listener for papere
btn[1].addEventListener('click', function (e) {
    play(1);
});
//event listener for scissors 
btn[2].addEventListener('click', function (e) {
    play(2);
});


function play(playersChoice) {


    //floor makes it round down
    var cpuChoice = Math.floor(Math.random() * 2.99999)
    //example of switch case
    switch (playersChoice) {
        case 0:
            if (cpuChoice === 0) {
                ctx.fillText("You Chose Rock, The Computer Choose Rock, You Tie", c.width / 2, c.height / 2)
            }
            else if (cpuChoice === 1) {
                ctx.fillText("You Chose Rock, The Computer Chose Paper, You Lost", c.width / 2, c.height / 2)
            }
            else {
                ctx.fillText("You Chose Rock, The Computer Chose Scissors, You Win", c.width / 2, c.height / 2)
            }
            break;
        case 1:
            if (cpuChoice === 0) {
                ctx.fillText("You Chose Paper, The Computer Chose Rock, You Win", c.width / 2, c.height / 2)
            }
            else if (cpuChoice === 1) {
                ctx.fillText("You Chose Paper, The Computer Chose Paper, You Tie", c.width / 2, c.height / 2)
            }
            else {
                ctx.fillText("You Chose Paper, The Computer Chose Scissors, You Lost", c.width / 2, c.height / 2)
            }
            break;
        case 2:
            if (cpuChoice === 0) {
                ctx.fillText("You Chose Scissors, You Chose The Computer Chose Rock, You Lost", c.width / 2, c.height / 2)
            }
            else if (cpuChoice === 1) {

                ctx.fillText("You Chose Scissors, The Computer Chose Paper, You Win", c.width / 2, c.height / 2)
            }
            else {
                ctx.fillText("You Chose Scissors, The Computer CHose Scissors, You Tie", c.width / 2, c.height / 2)
            }
            break;

    }

}
