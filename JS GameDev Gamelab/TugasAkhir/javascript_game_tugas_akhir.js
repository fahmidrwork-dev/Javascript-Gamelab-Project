// Mendapatkan elemen canvas
const canvas = document.getElementById('GL_Canvas');
const ctx = canvas.getContext('2d');

// Karakter utama
const player = {
    x: 50,
    y: canvas.height / 2,
    size: 30,
    color: 'blue',
    speed: 5
};

// Musuh
const enemy = {
    x: canvas.width - 100,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'purple',
    speed: 2
};

// Peluru
const bullets = [];
const bulletSpeed = 7;

// Skor
let score = 0;

function drawPlayer() {
    ctx.fillStyle = player.color;

    const halfSize = player.size / 2;

    ctx.beginPath();
    ctx.moveTo(player.x + halfSize, player.y);  // Right point
    ctx.lineTo(player.x - halfSize, player.y - halfSize);  // Top left corner
    ctx.lineTo(player.x - halfSize, player.y + halfSize);  // Bottom left corner
   
    ctx.closePath();
    
    ctx.fill();
}

function drawEnemy() {
    ctx.fillStyle = enemy.color;

    const centerX = enemy.x + enemy.width / 2;
    const centerY = enemy.y + enemy.height / 2;
    const radius = enemy.width / 2;
    const sides = 5; // Number of sides for the pentagon

    ctx.beginPath();
    ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

    for (let i = 1; i <= sides; i++) {
        const angle = (i * 2 * Math.PI) / sides;
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
    }

    ctx.closePath();
    ctx.fill();
}

function drawBullets() {
    ctx.fillStyle = 'red';
    for (const bullet of bullets) {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawScore() {
    // Draw background box
    ctx.fillStyle = 'rgba(204, 204, 204, 0.7)';
    ctx.fillRect(5, 5, 100, 40);

    // Draw score text
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('Score: ' + score, 10, 30);
}

function update() {
    // Update posisi musuh
    enemy.y += enemy.speed;

    // Jika musuh mencapai tepi atas atau bawah, balik arah
    if (enemy.y + enemy.height > canvas.height || enemy.y < 0) {
        enemy.speed *= -1;
    }

    // Update posisi peluru
    for (const bullet of bullets) {
        bullet.x += bulletSpeed;

        // Cek tabrakan dengan musuh
        if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y > enemy.y
        ) {
            // Tabrakan, tambahkan skor
            score++;
            // Reset posisi musuh
            enemy.x = canvas.width - 100;
            enemy.y = Math.random() * (canvas.height - enemy.height);
            // Hapus peluru yang mengenai musuh
            bullets.splice(bullets.indexOf(bullet), 1);
        }

        // Hapus peluru jika mencapai tepi layar
        if (bullet.x > canvas.width) {
            bullets.splice(bullets.indexOf(bullet), 1);
        }
    }
}

function draw() {
    // Set canvas background color to green
    ctx.fillStyle = '#F5F5F5'; // Green color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gambar karakter utama, musuh, peluru, dan skor
    drawPlayer();
    drawEnemy();
    drawBullets();
    drawScore();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Meng-handle input keyboard
window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        // Tombol spasi ditekan, tembakkan peluru
        bullets.push({ x: player.x, y: player.y });
    } else if (event.key === 'ArrowLeft' && player.x > player.size / 2) {
        // Tombol panah kiri ditekan, gerakkan karakter ke kiri
        player.x -= player.speed;
    } else if (event.key === 'ArrowRight' && player.x < canvas.width - player.size / 2) {
        // Tombol panah kanan ditekan, gerakkan karakter ke kanan
        player.x += player.speed;
    } else if (event.key === 'ArrowUp' && player.y > player.size / 2) {
        // Tombol panah atas ditekan, gerakkan karakter ke atas
        player.y -= player.speed;
    } else if (event.key === 'ArrowDown' && player.y < canvas.height - player.size / 2) {
        // Tombol panah bawah ditekan, gerakkan karakter ke bawah
        player.y += player.speed;
    }
});

// Mulai game loop
gameLoop();
