const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
];

const matrixB = [
    [7, 8, 9],
    [10, 11, 12],
];

function subtractMatrices(matrixA, matrixB) {
    let result = [];
    for (let i = 0; i < matrixA.length; i++) {
        let row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] - matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

console.log(addMatrices(matrixA, matrixB));
