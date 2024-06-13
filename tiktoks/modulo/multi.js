console.time('multiplication');
for (let i = 0; i < 10_000_000; i++) {
    const num = i * 0.5;
}
console.timeEnd('multiplication');

console.time('bitwise multiplication');
for (let i = 0; i < 10_000_000; i++) {
    const num = i >> 1;
}
console.timeEnd('bitwise multiplication');
