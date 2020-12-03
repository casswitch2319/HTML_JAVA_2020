
window.onload = function () {
    var c = document.getElementById("canvas")
    var ctx = c.getContext("2d")
    var result = "Select a Fighter from above Start"


    var rps = []
    rps[0] = 'korra'
    rps[1] = 'bolin'
    rps[2] = 'mako'
    rps[3] = 'tenzin'

    rps[4] = 'aang'
    rps[5] = 'katara'
    rps[6] = 'toph'
    rps[7] = 'zuko'


    //creating images
    var korra = new Image()
    korra.src = 'images/korra.png'
    var bolin = new Image()
    bolin.src = 'images/bolin.png'
    var mako = new Image()
    mako.src = 'images/mako.png'
    var tenzin = new Image()
    tenzin.src = "images/tenzin.png"
    var aang = new Image()
    aang.src = "images/aang.png"
    var katara = new Image()
    katara.src = "images/Katara.png"
    var toph = new Image()
    toph.src = "images/toph.png"
    var zuko = new Image()
    zuko.src = "images/zuko.png"

    zuko.onload = function () {
        draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
    }
    var btn = document.querySelectorAll('a');
    btn[0].innerHTML = rps[0]
    btn[1].innerHTML = rps[1]
    btn[2].innerHTML = rps[2]
    btn[3].innerHTML = rps[3]



    //korra//
    btn[0].addEventListener('click', function (e) {
        play(0);
    });
    //bolin
    btn[1].addEventListener('click', function (e) {
        play(1);
    });
    //mako
    btn[2].addEventListener('click', function (e) {
        play(2);
    });
    //tenzin
    btn[3].addEventListener('click', function (e) {
        play(3);
    });



    function draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko) {
        ctx.clearRect(0, 0, c.width, c.height)
        ctx.save()
        ctx.font = "35px Cinzel"
        ctx.textAlign = "center"
        ctx.fillStyle = 'orange'

        ctx.fillText('Choose Your Fighter', c.width / 2, 75)
        ctx.drawImage(korra, c.width / 2 - korra.width / 2 - 300, 100)
        ctx.drawImage(bolin, c.width / 2 - bolin.width / 2 - 100, 100)
        ctx.drawImage(mako, c.width / 2 - mako.width / 2 + 100, 100)
        ctx.drawImage(tenzin, c.width / 2 - tenzin.width / 2 + 300, 100)

        ctx.fillText('Computers Fighters', c.width / 2, 345)
        ctx.drawImage(aang, c.width / 2 - aang.width / 2 - 300, 375)
        ctx.drawImage(katara, c.width / 2 - katara.width / 2 - 100, 375)
        ctx.drawImage(toph, c.width / 2 - toph.width / 2 + 100, 375)
        ctx.drawImage(zuko, c.width / 2 - zuko.width / 2 + 300, 375)
        ctx.fillText(result, c.width / 2, 620)

        ctx.font = '20px Cinzel'
        ctx.fillStyle = '#FA5124'
        ctx.fillText('Korra', c.width / 2 - korra.width / 2 - 240, 300)
        ctx.fillText('Bolin', c.width / 2 - korra.width / 2 - 20, 300)
        ctx.fillText('Mako', c.width / 2 - korra.width / 2 + 150, 300)
        ctx.fillText('Tenzin', c.width / 2 - korra.width / 2 + 370, 300)
        ctx.fillText('Aang', c.width / 2 - aang.width / 2 - 200, 570)
        ctx.fillText('Katara', c.width / 2 - aang.width / 2 + 20, 570)
        ctx.fillText('Toph', c.width / 2 - aang.width / 2 + 200, 570)
        ctx.fillText('Zuko', c.width / 2 - aang.width / 2 + 400, 570)

        ctx.restore()
    }


    function play(playersChoice) {
        //floor makes it round down
        var cpuChoice = Math.floor(Math.random() * 9)
        //example of switch case
        switch (playersChoice) {
            case 0:
                //korra
                if (cpuChoice === 4) {
                    result = "Avatar vs Avatar, You Tie"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 5) {
                    result = "Water Bender-Korra vs Water Bender-Katara, You Tie"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 6) {
                    result = "Water Bender-Korra vs Earth Bender-Toph, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else {
                    result = "Water Bender-Korra vs Fire Bender-Zuko, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                break;
            case 1:
                //bolin
                if (cpuChoice === 4) {
                    result = "Earth Bender-Bolin vs Air Bender-Aang, You Lose"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 5) {
                    result = "Earth Bender-Bolin vs Water Bender-Katara, You Lose"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 6) {
                    result = "Earth Bender-Bolin vs Earth Bender-Toph, You Tie"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else {
                    result = "Earth Bender-Bolin vs Fire Bender-Zuko, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                break;
            case 2:
                //mako
                if (cpuChoice === 4) {
                    result = "Fire Bender-Mako vs Air Bender-Aang, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 5) {
                    result = "Fire Bender-Mako vs Water Bender-Katara, You Lose"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 6) {
                    result = "Fire Bender-Mako vs Earth Bender-Toph, You Lose"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else {
                    result = "Fire Bender-Mako vs Fire Bender-Zuko, You Tie"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                break;
            case 3:
                //tenzin
                if (cpuChoice === 4) {
                    result = "Air Bender-Tenzin vs Air Bender-Aang, You Tie"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 5) {
                    result = "Air Bender-Tenzin vs Water Bender-Katara, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else if (cpuChoice === 6) {
                    result = "Air Bender-Tenzin vs Earth Bender-Toph, You Win"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                else {
                    result = "Air Bender-Tenzin vs Fire Bender-Zuko, You Lose"
                    draw(korra, bolin, mako, tenzin, aang, katara, toph, zuko)
                }
                break;
        }
    }
}
