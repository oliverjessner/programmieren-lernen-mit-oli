const packedColor = 0b00001111_10000001_11111111;
const extractedRed = (packedColor >> 16) & 255;
const extractedGreen = (packedColor >> 8) & 255;
const extractedBlue = packedColor & 255;

console.log(extractedRed, extractedGreen, extractedBlue);
