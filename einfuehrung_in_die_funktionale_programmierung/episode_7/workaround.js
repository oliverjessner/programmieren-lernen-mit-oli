const _parseInt = (...args) => parseInt(args[0]);
const newInts = ['42', '1337', '10000'].map(_parseInt);

console.log(newInts);
