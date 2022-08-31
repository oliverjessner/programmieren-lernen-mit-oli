'use strict';
const yenConst = 138.78;

function celsiusToFarenheit (celsius) {
    return celsius * 1.8 + 32;
}

function farenheitToCelsius (farenheit) {
    return (farenheit - 32) * 5 / 9;
}

function euroToDollar (euro) {
    return euro * 1;
}

function euroToYen (euro) {
    return euro * yenConst;
}

function dollarToEuro (dollar) {
    return dollar * 1;
}

function dollarToYen (dollar) {
    return dollar * yenConst;
}

function yenToEuro (yen) {
    return yen / yenConst;
}

function yenToDollar (yen) {
    return yen / yenConst;
}

function tempConvert (tempUnit1, tempUnit2, value) {
    if (tempUnit1 === 'celsius' && tempUnit2 === 'farenheit') {
        return celsiusToFarenheit(value);
    }
    if (tempUnit1 === 'farenheit' && tempUnit2 === 'celsius') {
        return farenheitToCelsius(value);
    }

    return console.error('Wrong temps passed');
}

function currencyConvert (curUnit1, curUnit2, value) {
    if (curUnit1 === 'euro' && curUnit2 === 'dollar') {
        return euroToDollar(value);
    }
    if (curUnit1 === 'euro' && curUnit2 === 'yen') {
        return euroToYen(value);
    }
    if (curUnit1 === 'dollar' && curUnit2 === 'euro') {
        return dollarToEuro(value);
    }
    if (curUnit1 === 'dollar' && curUnit2 === 'yen') {
        return dollarToYen(value);
    }
    if (curUnit1 === 'yen' && curUnit2 === 'dollar') {
        return yenToDollar(value);
    }
    if (curUnit1 === 'yen' && curUnit2 === 'euro') {
        return yenToEuro(value);
    }

    return console.error('wrong currency passsed');
}

function convert (type, unit1, unit2, value) {
    if (type === 'temp') {
        const newValue = tempConvert(unit1, unit2, value)
        return parseFloat(newValue.toFixed(4));
    }
    if (type === 'currency') {
        const newValue = currencyConvert(unit1, unit2, value)
        return parseFloat(newValue.toFixed(4));
    }

    return console.error('Wrong type passed');
}