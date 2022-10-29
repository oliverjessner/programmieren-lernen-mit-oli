const arr = [2, 4, 4, 4, 4, 4, 5, 6];
const unqiue = arr => [...new Set(arr)];

console.log(unqiue(arr));