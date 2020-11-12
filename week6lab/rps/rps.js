//array of choices 
var rps = [];
rps[0] = 'Rock'
rps[1] = 'Paper'
rps[2] = 'Scissors'

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
                alert('Computer Chose Rock, You Tied')
            }
            else if (cpuChoice === 1) {
                alert('Computer Chose Paper, You lose')
            }
            else {
                alert('Computer Chose Scissors, Yoou Win')
            }

            break;
        case 1:
            if (cpuChoice === 0) {
                alert('Computer Chose Rock, You Win')
            }
            else if (cpuChoice === 1) {
                alert('Computer Chose Paper, You tie')
            }
            else {
                alert('Computer Chose Scissors, You Lose')
            }


            break;
        case 2:
            if (cpuChoice === 0) {
                alert('Computer Chose Rock, You Lose')
            }
            else if (cpuChoice === 1) {
                alert('Computer Chose Paper, You Win')
            }
            else {
                alert('Computer Chose Scissors, You Tie')
            }

            break;

    }

}
