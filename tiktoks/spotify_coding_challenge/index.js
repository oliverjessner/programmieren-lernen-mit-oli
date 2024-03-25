function isPowerOfFour(num) {
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    if (num % 4 !== 0) {
        return false;
    }

    return isPowerOfFour(num / 4);
}

console.log(isPowerOfFour(2));
console.log(isPowerOfFour(12));
console.log(isPowerOfFour(22));
console.log(isPowerOfFour(1024));
console.log(isPowerOfFour(2048));
console.log(isPowerOfFour(16777216));
