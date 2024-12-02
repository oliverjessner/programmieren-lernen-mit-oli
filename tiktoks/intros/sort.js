const radius = 10;
const arr = [1, 3, 2, 4, 5];
let diameter = 2 * radius;
let sortedArr = arr.sort(sort);

function sort(a, b) {
    return a - b;
}

function calcDiameter(radius) {
    return 2 * radius;
}
