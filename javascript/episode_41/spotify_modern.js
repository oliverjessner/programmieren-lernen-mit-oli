function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrom('anna')); // true
console.log(isPalindrom('oliver')); // false
console.log(isPalindrom('racecar')); // true
