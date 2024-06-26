const red = 255; // 11111111
const green = 128; // 10000000
const blue = 64; // 01000000

const color = (red << 16) | (green << 8) | blue;

console.log(color.toString(2));
