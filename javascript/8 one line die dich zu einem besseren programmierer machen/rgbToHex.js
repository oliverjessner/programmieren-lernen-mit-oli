// 1 << 24 === 16777216
const rgbToHex = ([r, g, b]) => '#' + (16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log('[0, 0, 0]', rgbToHex([0, 0, 0]));
console.log('[255, 255, 255]', rgbToHex([255, 255, 255]));
console.log('[56, 123, 3]', rgbToHex([56, 123, 3]));
