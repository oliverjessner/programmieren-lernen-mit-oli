const backgroundImage = new Image(); 
const playerImage = new Image();
const canvas = document.querySelector('#main-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

backgroundImage.src = './assets/map/raw/starting_town.png';
playerImage.src = './assets/chars/maggus.png';

backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, -625, -700);

    playerImage.onload = function () {
        ctx.drawImage(
            playerImage, 
            0, // cropping x
            0, // cropping y
            playerImage.width / 4,
            playerImage.height / 4,
            canvas.width / 2 - 50,
            canvas.height / 2 + 250,
            playerImage.width,
            playerImage.height
        );
    };
};