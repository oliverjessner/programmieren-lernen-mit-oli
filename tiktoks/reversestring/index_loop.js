// constrain no extra memory
const str1 = 'i dont read comments';
const str2 = '.reverse() is not a a valid answer';

function reverse(str) {
    const chars = str.split('');
    let s = '';

    for (let i = chars.length - 1; i > -1; i--) {
        s += chars[i];
    }

    return s;
}

console.log(reverse(str1));
console.log(reverse(str2));
