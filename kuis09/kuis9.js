// mengambil element canvas html dengan id GL_Canvas
var canvas = document.getElementById("GL_Canvas");

// mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

var running = false;
// membuat objek bola (ball) yang di dalamnya terdapat
// beberapa sifat dan juga fungsi dengan nama draw
var ball = {
    x: 200,
    y: 200,
    vx :5,
    vy :2,
    radius: 25,

    // sifat bola yang berupa warna bola (jingga - orange)
    color: 'orange',

    // fungsi untuk menggambarkan bola
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

// untuk menampung pemanggilan fungsi drawBall
var raf;

// fungsi untuk menggambar ulang bola dengan
// posisi yang berbeda serta menampung pemanggilan 
// ulang fungsi drawBall
function drawBall() {
	// membersihkan canvas dengan
	// menggambar persegi kosongan
    ctx.fillStyle = 'rgba(255,255,255,0.3';
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ball.draw();
	ball.x += ball.vx;
	ball.y += ball.vy;

    //mengubah kecepatan pergerakan
    // vertikal bola
    ball.vy *=.99;//bisa juga ditulis 0.99
    ball.vy += .25 //bisa juga ditulis 0.25

	raf = window.requestAnimationFrame(drawBall);

    if(ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0)
    {
        //membalikkan nilai kecepatan x atau horizontal
        ball.vx = -ball.vx;
    }

    if(ball.y+ball.vy> canvas.height || ball.y + ball.vy < 0) 
    {
        ball.vy = -ball.vy;
    }
}
// event listener untuk mendeteksi ketika
// pointer berada di dalam area canvas
canvas.addEventListener('click',function (e) 
{
    if(!running)
    {
        raf = window.requestAnimationFrame(drawBall);
        running = true;
    }
});

//event listener untuk mendeteksi ketika
// pointer berada di dalam area canvas
canvas.addEventListener('mouseout',function (e)
{
    window.cancelAnimationFrame(raf);
    running = false;
});

//event listener untuk mendeteksi ketika 
//mouse sedang bergerak
canvas.addEventListener('mousemove', function(e)
{
    if(!running)
    {

        //menggambarkan persegi panjang samar-samar 
        //seukuran canvas untuk membuat efek trailing
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        
        ball.x = e.clientX;
        
        ball.y = e.clientY;
        
        ball.draw();
    }
});

ball.draw();
