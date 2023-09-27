const arr = [1, 2, 3, 4, 5, 6];

const evenIndex = arr.findIndex(function (element) {
    return element % 2 === 0;
});

const lastEvenIndex = arr.findLastIndex(function (element) {
    return element % 2 === 0;
});

console.log(evenIndex, lastEvenIndex);
