import fs from 'fs';

const filePath = '/Users/oli/github/programmieren-lernen-mit-oli/tiktoks/14k_followers/isEven.js';
let content = `const _isEven = {\n`;

for (let i = 0; i < 14_001; i++) {
    content += `    ${i}: ${i % 2 === 0},\n`;
}

content += `};
export default function isEven(num) {
    if (num > 14_000) {
        throw new Error('Number too large');
    }
    
    return _isEven[num];
};`;

fs.writeFile(filePath, content, err => {
    console.log('done');
});
