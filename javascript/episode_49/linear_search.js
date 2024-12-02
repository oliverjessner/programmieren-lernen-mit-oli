const image = [
    ['#000', '#000', '#000'],
    ['#000', '#FFF', '#000'],
    ['#000', '#000', '#000'],
];

function linearSearch2D(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === target) {
                return { row: i, col: j };
            }
        }
    }
    return null;
}

const element = '#FFF';
const { row, col } = linearSearch2D(image, element);

console.log(image[row][col] === element);
