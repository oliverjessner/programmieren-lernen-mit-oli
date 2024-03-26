const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const w = 75;
const h = 61;
const bird = {
    x: 50,
    y: canvas.height / 2,
    radius: 20,
    velocity: -1,
    gravity: 0.3,
    jumpStrength: -7.5,
    width: w,
    height: h,
    frameIndex: 0,
    framesPerRow: 4,
    frameWidth: w,
    frameHeight: h,
    updateFrame: function () {
        this.frameIndex = (this.frameIndex + 1) % this.framesPerRow;
    },
};
const obstacle = {
    width: 50,
    color: '#4caf50',
    gap: 225, // Größerer Abstand zwischen den Hindernissen
    x: canvas.width,
    speed: 2,
    pairs: [],
};
let score = 0;
let highscore = 0; // Highscore-Variable hinzugefügt

const background = new Image();
const birdImage = new Image();
birdImage.src = 'birdy.png';
background.src = 'background.jpg';

function drawBird() {
    ctx.drawImage(
        birdImage,
        bird.frameIndex * bird.frameWidth,
        0,
        bird.frameWidth,
        bird.frameHeight,
        bird.x,
        bird.y,
        bird.width,
        bird.height,
    );

    bird.updateFrame();
}

function drawBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawObstacles() {
    obstacle.pairs.forEach(pair => {
        const topHeight = pair.top;
        const bottomHeight = canvas.height - pair.top - obstacle.gap;

        // Draw top obstacle
        ctx.beginPath();
        ctx.rect(pair.x, 0, obstacle.width, topHeight);
        ctx.roundRect(pair.x - 10, topHeight - 20, obstacle.width + 20, 20, 5);
        ctx.fillStyle = obstacle.color;
        ctx.fill();
        ctx.closePath();

        // Draw bottom obstacle
        ctx.beginPath();
        ctx.rect(pair.x, canvas.height - bottomHeight, obstacle.width, bottomHeight);
        ctx.roundRect(pair.x - 10, canvas.height - bottomHeight, obstacle.width + 20, 20, 5);
        ctx.fillStyle = obstacle.color;
        ctx.fill();
        ctx.closePath();
    });
}

function updateScore() {
    document.getElementById('currentScore').textContent = score;
    document.getElementById('highscore').textContent = highscore;
    localStorage.setItem('highscore', highscore);
}

function updateObstacles() {
    if (obstacle.pairs.length === 0 || obstacle.pairs[obstacle.pairs.length - 1].x < canvas.width - 300) {
        const topHeight = Math.random() * (canvas.height - obstacle.gap - 100) + 50;
        obstacle.pairs.push({
            x: canvas.width,
            top: topHeight,
        });
    }

    obstacle.pairs.forEach(pair => {
        pair.x -= obstacle.speed;
    });

    if (obstacle.pairs[0].x + obstacle.width < 0) {
        obstacle.pairs.shift();
    }
}

function collisionDetection() {
    obstacle.pairs.forEach(pair => {
        if (
            bird.x + bird.radius > pair.x &&
            bird.x - bird.radius < pair.x + obstacle.width &&
            (bird.y - bird.radius < pair.top || bird.y + bird.radius > pair.top + obstacle.gap)
        ) {
            gameOver();
        }
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.radius > canvas.height) {
        bird.y = canvas.height - bird.radius;
        bird.velocity = 0;
    }

    if (bird.y - bird.radius < 0) {
        bird.y = bird.radius;
        bird.velocity = 0;
    }

    if (obstacle.pairs.length > 0) {
        if (bird.x > obstacle.pairs[0].x + obstacle.width && !obstacle.pairs[0].scored) {
            score++;
            updateScore(); // Highscore aktualisieren
            obstacle.pairs[0].scored = true;
            if (score > highscore) {
                // Highscore aktualisieren, wenn nötig
                highscore = score;
            }
        }
    }
    drawBackground();
    drawBird();
    drawObstacles();
    updateObstacles();
    collisionDetection();

    requestAnimationFrame(update);
}

function resetGame() {
    score = 0;
    bird.y = canvas.height / 2;
    obstacle.pairs = [];
    updateScore(); // Highscore aktualisieren
}

function gameOver() {
    alert(`Game Over! Score: ${score}`);
    if (score > highscore) {
        highscore = score;
    }

    resetGame();
    updateScore(); // Highscore aktualisieren
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        bird.velocity = bird.jumpStrength;
    }
});

highscore = localStorage.getItem('highscore');

update();
updateScore();
