// mengambil element canvas html dengan id GL_Canvas
var canvas = document.getElementById("GL_Canvas");

// mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");


// menentukan background dari persegi panjang
var radRect = ctx.createLinearGradient(0, -350, 0, 350);
radRect.addColorStop(0.5, '#232256');
radRect.addColorStop(1, '#143778');
ctx.fillStyle = radRect;

// mulai menggambarkan persegi panjang sebesar canvas dengan
// background dari radRect
ctx.fillRect(0, 0, canvas.width, canvas.height);


// menentukan background dari segi tiga
var radTriangle = ctx.createLinearGradient(0, -350, 0, 350);
radTriangle.addColorStop(0.5, '#232256');
radTriangle.addColorStop(1, '#ffcf75');
ctx.fillStyle = radTriangle;

// mulai menggambarkan segi tiga dengan
// background dari radTriangle
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width * 2, 0);
ctx.lineTo(0, 480);
ctx.closePath();
ctx.fill();

// menentukan area yang dapat digambar bentuk (bintang-bintang kecil)
// jika bentuk melebihi area, maka akan terpotong
ctx.clip();

// menggambarkan bentuk bintang-bintang kecil sebanyak 100 dan
// menempatkannya secara acak
for (var j = 1; j < 100; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(canvas.width - Math.floor(Math.random() * canvas.width),
        canvas.height - Math.floor(Math.random() * canvas.height));

    // memanggil fungsi untuk membuat bentuk bintang-bintang kecil dengan 
    // ukuran dan posisi acak
    drawStar(ctx, Math.floor(Math.random() * 6) + 2);
    ctx.restore();
}

// fungsi untuk menggambar 1 bentuk bintang
// untuk nanti dipanggil sebanyak 100 kali
function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
            ctx.lineTo((r / 0.525731) * 0.200811, 0);
        }
        else {
            ctx.lineTo(r, 0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}