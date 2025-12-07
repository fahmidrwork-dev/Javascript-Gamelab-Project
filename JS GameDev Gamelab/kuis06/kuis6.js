var canvas = document.getElementById("GL_Canvas");
var ctx = canvas.getContext("2d");

var color1 = "Lavender"
var color2 = "#FFFACD";

var numberOfStripes = 50;

var thickness = 640 / numberOfStripes;

ctx.lineWidth = thickness;

for (var i=0; i< numberOfStripes *2; i++)
{
    ctx.beginPath();

    ctx.strokeStyle = i% 2 ? color1:color2;

    ctx.moveTo(i* thickness-640,-10);

    ctx.lineTo(i* thickness, 640 );

    ctx.stroke();
}

ctx.lineWidth = 1;

var lineGradient= ctx.createLinearGradient(10,150,60,150);
lineGradient.addColorStop(0, 'black');
lineGradient.addColorStop(1,'white');
ctx.fillStyle = lineGradient;
ctx.fillRect(10,10,70,70);

ctx.strokeRect(10,10,70,70);

ctx.fillStyle = '#0000FF';
ctx.fillRect(90,10,70,70);

ctx.clearRect(115,35,20,20);

ctx.beginPath();
ctx.arc(50,140,30,0,50);
ctx.stroke();
ctx.cloePath();

ctx.strokeStyle = 'rgb(255,165,0';

ctx.beginPath();
ctx.moveTo(130,110);
ctx.lineTo(90,170);
ctx.lineTo(170.170);
ctx.closePath();
ctx.stroke();

var radGradient = ctx.createRadialGradient(95 + 25,150 -25, 2,95 + 25,150 - 25,25);
radGradient.addColorStop(0,'#A7D30C');
radGradient.addColorStop(1, '#019F62');

ctx.fillStyle = radGradient;

ctx.fillRect(95,100,50,50);
