function hammingDistance(str1, str2) {
    return [...str1].reduce(function (acc, char, i) {
        if (char !== str2[i]) {
            return acc + 1;
        }

        return acc;
    }, 0);
}

console.log(hammingDistance('oliverjessner', 'olivermessner'));
console.log(hammingDistance('10000', '11111'));
console.log(hammingDistance('Duck Pic', 'Dirk Pic'));
