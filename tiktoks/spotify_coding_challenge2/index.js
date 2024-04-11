function getLengthOfLastWord(sentence) {
    let i = sentence.length - 1;
    let count = 0;

    while (i >= 0) {
        if (sentence[i] === ' ' && count !== 0) {
            return count;
        }
        if (sentence[i] !== ' ') {
            count++;
        }
        i--;
    }

    return count;
}

console.log(getLengthOfLastWord('Hallo Welt'));
console.log(getLengthOfLastWord('  I like turtles  '));
console.log(getLengthOfLastWord('Java is not JavaScript        '));
