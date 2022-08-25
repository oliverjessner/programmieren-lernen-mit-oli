const arr = ['Oliver', 'Bernhard', 'Franz', 'Nicolas'];

function findFirstWordWithLetter (arr, letter) {
    for (let word of arr) {
        if (word[0].toLowerCase() === letter.toLowerCase()) {
            return word;
        }
    }
}   

const firstWord = findFirstWordWithLetter(arr, 'f');

console.log(firstWord);
