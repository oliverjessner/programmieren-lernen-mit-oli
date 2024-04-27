const flowers1 = [0, 1, 0, 1, 0, 0, 1];
const flowers2 = [0, 1, 0, 1, 0, 0, 0];
const flowers3 = [0, 0, 0];
const flowers4 = [0, 1, 0, 0, 0];
const flowers5 = [0, 0, 1, 0, 0];

function plantFlowers(flowers) {
    let i = 1;

    while (i < flowers.length - 1) {
        if (flowers[i] === 0 && flowers[i - 1] === 0 && flowers[i + 1] === 0) {
            return true;
        }

        i++;
    }

    return false;
}

console.log(plantFlowers(flowers1)); // false
console.log(plantFlowers(flowers2)); // true
console.log(plantFlowers(flowers3)); // true
console.log(plantFlowers(flowers4)); // true
console.log(plantFlowers(flowers5)); // false
