export default function binaryToIp(binary) {
    return [(binary >> 24) & 255, (binary >> 16) & 255, (binary >> 8) & 255, binary & 255].join('.');
}
