const temp = [32.5, 33, 31, 33.5]; // Celsius
const tempFor = [];
const tempForIn = [];
const tempForOf = [];
const offset = 0;

function output () {
    const text = 'Wrong type of temp';
    console.log(text);
}

function celsiusToFarenheit (temp) {
    const constant = 1.8;
    const offset = 32;

    if (typeof temp === 'string') {
        const convertedNumber = parseFloat(temp);
        return celsiusToFarenheit(convertedNumber);
    }
    if (typeof temp !== 'number') {
        return output();
    } 

    return temp * constant + offset + ' °F';
}

// klassische for 
for (let i = 0; i < temp.length; i++) {
    if (i === 2) {
        break;
    }

    tempFor.push(celsiusToFarenheit(temp[i]));
}

// for in schleife
for (let t in temp) {
    if (t === '2') {
        break;
    }

    tempForIn.push(celsiusToFarenheit(temp[t]));
}

// for of schleife 
for (let t of temp) {
    if (t === 31) {
        break;
    }

    tempForOf.push(celsiusToFarenheit(t));
}

console.log(temp);
console.log(tempFor);
console.log(tempForIn);
console.log(tempForOf);

