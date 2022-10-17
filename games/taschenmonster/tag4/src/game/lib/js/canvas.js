const canvas = document.querySelector('#main-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export default ctx;