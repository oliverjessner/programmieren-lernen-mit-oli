function hammingDistance(a, b) {
    let distance = 0;

    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] !== b[i]) {
            distance++;
        }
    }

    return distance;
}

console.log(hammingDistance('oliverjessner', 'olivermessner'));
console.log(hammingDistance('10101', '10011'));
console.log(hammingDistance('Duck Pic', 'Dirk Pic'));
