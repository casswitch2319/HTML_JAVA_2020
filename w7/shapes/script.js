var c = document.querySelector('canvas');
var ctx = c.getContext('2d')



ctx.lineWidth   = 5;

//SQUARE
ctx.strokeStyle = "black";
ctx.strokeRect(84, 301, 102, 102);
ctx.fillStyle = "yellow"
ctx.fillRect(84, 301, 102, 102)


//line
ctx.beginPath();
ctx.strokeStyle = "rgb(255,0,0)"
ctx.moveTo(85, 684);
ctx.lineTo(279, 549);
ctx.closePath
ctx.stroke()



//circle
ctx.fillStyle = "#ffff00"
ctx.beginPath()
ctx.arc(385, 441, 67, 0, 2 * Math.PI, false)
ctx.closePath()
ctx.stroke()
ctx.strokeStyle = 'red'
ctx.fill()


//star
ctx.beginPath()
ctx.fillStyle= "#ffff00"
ctx.moveTo(636, 496)
ctx.lineTo(669, 555)
ctx.lineTo(734, 567)
ctx.lineTo(688, 615)
ctx.lineTo(696, 682)
ctx.lineTo(636, 654)
ctx.lineTo(576, 682)
ctx.lineTo(582, 615)
ctx.lineTo(538, 567)
ctx.lineTo(603,555)
ctx.lineTo(636,496)
ctx.closePath()
ctx.strokeStyle = 'rgb(32,32,32'
ctx.stroke()
ctx.fill()


//pentagon
ctx.beginPath()
ctx.fillStyle = '#ff00ff'
ctx.moveTo(558,308)
ctx.lineTo(668,284)
ctx.lineTo(725,380)
ctx.lineTo(650,465)
ctx.lineTo(548,420)
ctx.lineTo(558,308)
ctx.closePath()
ctx.strokeStyle = '#00ffff'
ctx.stroke()
ctx.fill()