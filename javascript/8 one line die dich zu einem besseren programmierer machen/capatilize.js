const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
const capitalizeOld = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

console.log(capitalize('hello world'));
console.log(capitalizeOld('hello world'));
