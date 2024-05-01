function isPalindromeLow(str) {
    const revStr = str.split('').reverse().join('');
    return revStr === str;
}

function isPalindrome(str) {
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

console.log(isPalindromeLow('oliver'));
console.log(isPalindromeLow('maoam'));
console.log(isPalindrome('oliver'));
console.log(isPalindrome('maoam'));
