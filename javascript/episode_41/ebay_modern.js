function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates('hello')); // helo
console.log(removeDuplicates('aabbcc')); // abc
console.log(removeDuplicates('aabbaccabb')); // abacab
