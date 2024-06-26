const text1 = 0b0000_0101; // Klartext
const key = 0b0010_1110;
const cipherText = text1 ^ key;

console.log(cipherText.toString(2));
console.log((cipherText ^ key).toString(2));

/*
1 ^ 1 = 0
0 ^ 1 = 1
1 ^ 0 = 1
0 ^ 0 = 0
*/
