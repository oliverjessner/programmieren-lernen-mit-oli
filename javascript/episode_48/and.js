import binaryToIp from './binaryToIp.js';

//            192      168             1        1
const ip1 = 0b11000000_10101000_00000001_00000001; // 192.168.1.1
const ip2 = 0b11000000_10101000_00000001_00000010; // 192.168.1.2
const ip3 = 0b11000000_10101000_00000001_00000011; // 192.168.1.3

//                   255      255      255      0
const subnetMask = 0b11111111_11111111_11111111_00000000; // 255.255.255.0

const networkAddress1 = ip1 & subnetMask;
const networkAddress2 = ip2 & subnetMask;
const networkAddress3 = ip3 & subnetMask;

/*
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
*/

console.log(binaryToIp(networkAddress1));
console.log(binaryToIp(networkAddress2));
console.log(binaryToIp(networkAddress3));
