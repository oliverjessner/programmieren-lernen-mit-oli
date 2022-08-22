const temp1 = '32.5'; 
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

const f1 = celsiusToFarenheit(temp1);

console.log(f1);
console.log(typeof f1);
