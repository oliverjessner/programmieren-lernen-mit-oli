function euclideanAlgorithmRecursive(a, b) {
    return b === 0 ? a : euclideanAlgorithmRecursive(b, a % b);
}

console.log(euclideanAlgorithmIterative(1000, 256));
