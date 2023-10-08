const arr = [1, 2, 3, 4, 5, 6];

const last = arr.findLast(element => {
    return element % 2 === 0;
});
const index = arr.findLastIndex(element => {
    return element % 2 === 0;
});

console.log(last, index);
