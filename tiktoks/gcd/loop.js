function euclideanAlgorithmLoop(a, b) {
    while (a !== b) {
        [a, b] = a > b ? [a - b, b] : [a, b - a];
    }

    return a || b;
}

console.log(euclideanAlgorithmLoop(1000, 256));
