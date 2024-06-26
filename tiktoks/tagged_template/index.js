const person = 'Oliver';
const age = 22; // 🌝

function ageOutput(strings, personExp, ageExp) {
    const str0 = strings[0]; // My name is:
    const str1 = strings[1]; // and I am a
    const str2 = strings[2]; // .

    const ageStr = ageExp < 32 ? 'youngster' : 'old guy';

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = ageOutput`My name is: ${person} and I am a ${age}.`;

console.log(output);
