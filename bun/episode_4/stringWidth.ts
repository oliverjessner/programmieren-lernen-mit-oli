import { stringWidth } from 'bun';
// string-width

console.log(stringWidth('hello')); // 5
console.log(stringWidth('👋')); // 2
console.log(stringWidth('你好')); // 4
console.log(stringWidth('👩‍👩‍👧‍👦')); // 2
console.log(stringWidth('\u001b[31mhello\u001b[39m')); // 5
