const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

function rotate(matrix) {
    const cols = matrix[0].length;

    transpose(matrix);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols / 2; j++) {
            const swap = matrix[i][j];

            matrix[i][j] = matrix[i][cols - j - 1];
            matrix[i][cols - j - 1] = swap;
        }
    }
}

function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            const swap = matrix[i][j];

            matrix[i][j] = matrix[j][i];
            matrix[j][i] = swap;
        }
    }
}

rotate(matrix);
console.log(matrix);
