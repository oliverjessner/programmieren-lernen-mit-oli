/* Q9: Schreibe eine Anagramme Funktion. */

const firstWord = 'Mary';
const secondWord = 'Army';

function isAnagram(first, second) {
    const lowerFirst = first.toLowerCase().split('').sort().join('');
    const lowerSecond = second.toLowerCase().split('').sort().join('');

    return lowerFirst === lowerSecond;
}

console.log(isAnagram(firstWord, secondWord));
