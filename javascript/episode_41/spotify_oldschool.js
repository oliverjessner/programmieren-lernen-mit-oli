function isPalindrom(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrom('anna')); // true
console.log(isPalindrom('oliver')); // false
console.log(isPalindrom('racecar')); // true
