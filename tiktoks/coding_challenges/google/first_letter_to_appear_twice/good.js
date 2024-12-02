function firstLetterTwice(s) {
    const obj = {};

    for (let char of s) {
        if (obj[char]) {
            return char;
        } else {
            obj[char] = true;
        }
    }
}

console.log(firstLetterTwice('abcdeeff'));
console.log(firstLetterTwice('aabccdef'));
console.log(firstLetterTwice('abcdeff'));
