function removeDuplicates(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

console.log(removeDuplicates('hello')); // helo
console.log(removeDuplicates('aabbcc')); // abc
console.log(removeDuplicates('aabbaccabb')); // abc
