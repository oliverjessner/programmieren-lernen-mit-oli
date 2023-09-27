const arr = [1, 2, 3, 4, 5, 6];

const firstEven = arr.find(function (element) {
    return element % 2 === 0;
});
const lastEven = arr.findLast(function (element) {
    return element % 2 === 0;
});

console.log(firstEven, lastEven);
