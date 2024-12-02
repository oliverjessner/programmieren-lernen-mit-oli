function firstLetterTwice(s) {
    let bitmap = 0;

    for (let i = 0; i < s.length; i++) {
        // 'a'.charCodeAt(0) = 97 - 97 = 1
        const bitPosition = s.charCodeAt(i) - 97;

        if (bitmap & (1 << bitPosition)) {
            return s[i];
        }

        bitmap |= 1 << bitPosition;
    }
}

console.log(firstLetterTwice('abcdeeff'));
console.log(firstLetterTwice('aabccdef'));
console.log(firstLetterTwice('abcdeff'));
