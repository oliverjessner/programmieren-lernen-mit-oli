/* Q8: Schreibe eine Funktion in JavaScript, um einen String umzukehren (reversen). */

function reverse(str) {
    return str.split('').reverse().join('');
}

const rawString = 'Job Interview Fragen machen spaß';
const reversedString = reverse(rawString);
console.log(reversedString);
