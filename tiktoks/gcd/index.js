function euclideanAlgorithmRecursive(a, b) {
    return b === 0 ? a : euclideanAlgorithmRecursive(b, a % b);
}

function euclideanAlgorithmIterative(a, b) {
    while (a && b && a !== b) {
        [a, b] = a > b ? [a - b, b] : [a, b - a];
    }

    return a || b;
}

console.log(euclideanAlgorithmRecursive(256, 1000));
console.log(euclideanAlgorithmIterative(1000, 256));
