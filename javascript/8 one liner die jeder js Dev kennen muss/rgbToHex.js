// 1 << 24 === 16777216
const rgbToHex = ([r, g, b]) => '#' + (16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex([0, 0, 0]));
console.log(rgbToHex([255, 255, 255]));
console.log(rgbToHex([56, 123, 3]));