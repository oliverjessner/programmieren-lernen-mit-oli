// constrain no extra memory
const str1 = 'i dont read comments';
const str2 = '.reverse() is not a a valid answer';

function reverse(str) {
    const chars = str.split('');
    let start = 0;
    let end = chars.length - 1;

    while (start < end) {
        const temp = chars[start];

        chars[start] = chars[end];
        chars[end] = temp;

        start++;
        end--;
    }

    return chars.join('');
}

console.log(reverse(str1));
console.log(reverse(str2));
