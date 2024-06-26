const red = 0b11111111; // 255
const green = 0b10000000; // 128
const blue = 0b01000000; // 64

const negativeColor1 = ~red & 255;
const negativeColor2 = ~green & 255;
const negativeColor3 = ~blue & 255;

/* 
1 = 0 
0 = 1
*/

console.log(negativeColor1);
console.log(negativeColor2);
console.log(negativeColor3);
