const arr = [2, 4, 4, 4, 4, 4, 5, 6];
const unique = arr => [...new Set(arr)];

console.log(unique(arr));
