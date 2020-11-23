var c =document.querySelector('canvas');
var ctx = c.getContext('2d')


ctx.fillStyle = "#c82124"; //red
ctx.beginPath();
ctx.arc(15,15,15,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "#3370d4"; //blue
ctx.beginPath();
ctx.arc(580,15,15,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();


ctx.beginPath(); 
ctx.moveTo(50,50);
ctx.lineTo(120,150);
ctx.lineTo(0,180); 
ctx.lineTo(120,210);
ctx.lineTo(50,310);  
ctx.lineTo(160,250);
ctx.lineTo(190,370);
ctx.lineTo(220,250);
ctx.lineTo(330,310);
ctx.lineTo(260,210);
ctx.lineTo(380,180);
ctx.closePath();
ctx.stroke();


ctx.strokeStyle='#00cc00';
ctx.beginPath
ctx.lineWidth=5;
ctx.moveTo(100,0);
ctx.lineTo(100,1000);
ctx.stroke();
// draw a 20 pix red line
ctx.strokeStyle='#cc0000';
ctx.lineWidth=5;
ctx.moveTo(140,0);
ctx.lineTo(140,1000);
ctx.stroke();



ctx.fillStyle = "blue";
ctx.fillRect(10,10, 100,100);

ctx.strokeStyle = "red";
ctx.lineWidth   = 5;
ctx.strokeRect(10,10, 100,100);