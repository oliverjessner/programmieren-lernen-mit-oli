const FLAG_READ = 0b0001; // 1
const FLAG_WRITE = 0b0010; // 2
const FLAG_EXECUTE = 0b0100; // 4

const permissions1 = FLAG_READ | FLAG_WRITE;
const permissions2 = FLAG_READ | FLAG_EXECUTE;
const permissions3 = FLAG_READ | FLAG_WRITE | FLAG_EXECUTE;

function toggleFlags(permission, flag) {
    return permission ^ flag;
}

console.log(permissions1.toString(2), permissions1);
console.log(permissions2.toString(2), permissions2);
console.log(permissions3.toString(2), permissions3);
console.log(toggleFlags(permissions3, FLAG_WRITE).toString(2), toggleFlags(permissions3, FLAG_WRITE));

/*
1 | 1 = 1
1 | 0 = 1 
0 | 1 = 1 
0 | 0 = 0
*/
