function isSequenceInString(seq, text) {
    let index = 0;

    for (let char of text) {
        if (char === seq[index]) {
            index++;
        }
        if (index === seq.length) {
            return true;
        }
    }

    return false;
}

console.log(isSequenceInString('abc', 'annnbnc'));
console.log(isSequenceInString('abc', 'annnnc'));
console.log(isSequenceInString('efg', 'efnnng'));
console.log(isSequenceInString('abc', 'bnanc'));
