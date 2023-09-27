const arr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const newArr = arr.toSpliced(2, 1, 'pink', 'cyan');

console.log(newArr);
console.log(arr);

arr.splice(2, 1, 'pink', 'cyan');
console.log(arr);
