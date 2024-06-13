console.time('modulo');
for (let i = 0; i < 10_000_000; i++) {
    const num = i % 2;
}
console.timeEnd('modulo');

console.time('bitwise');
for (let i = 0; i < 10_000_000; i++) {
    const num = i & 1;
}
console.timeEnd('bitwise');
