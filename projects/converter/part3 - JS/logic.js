'use strict';
const temps = [{
    name: 'Grad Farenheit',
    value: 'farenheit'
}, {
    name: 'Grad Celsius',
    value: 'celsius'
}];
const currencies = [{
    name: 'Euro',
    value: 'euro'
}, {
    name: 'Dollar',
    value: 'dollar'
}, {
    name: 'Yen',
    value: 'yen'
}];
const types = Object.freeze([{
    name: 'temp',
    content: temps
}, {
    name: 'currency',
    content: currencies
}]);
const main = document.querySelector('main');
const typeSelect = main.querySelector('.type-select');
const fromSelect = main.querySelector('.select-from');
const toSelect = main.querySelector('.select-to');
const fromInput = main.querySelector('.input-from');
const toInput = main.querySelector('.input-to');

function setConvertedValue (from, to, value, input) {
    const type = typeSelect.value;
    const newValue = convert(type, from, to, value);

    input.value = newValue;
}

function setUnitsInSelects (pickedType) {
    const fromType = types.find(function (type) {
        return type.name === pickedType;
    }).content; 
    const HTML = fromType.map(function (type) {
        return '<option value="' + type.value + '">' + type.name + '</option>';
    });
    
    fromSelect.innerHTML = HTML;
    toSelect.innerHTML = HTML;
    toSelect.value = fromType[1].value;

    setConvertedValue(fromSelect.value, toSelect.value, fromInput.value, toInput);
}

function preventSameUnits (pickedType, compareType, select) {
    if (pickedType === compareType) {
        const content = types.find(function (type) {
            return type.name === typeSelect.value;
        }).content;
        const newUnit = content.find(function (content) {
            return content.value !== pickedType;
        });

        select.value = newUnit.value;
    }
}

typeSelect.addEventListener('change', function (event) {
    const pickedType = event.target.value;

    setUnitsInSelects(pickedType);
    fromInput.focus();
});
fromSelect.addEventListener('change', function (event) {
    const pickedType = event.target.value;
    const toPicked = toSelect.value; 

    preventSameUnits(pickedType, toPicked, toSelect);
    return setConvertedValue(pickedType, toSelect.value, fromInput.value, toInput);
});
toSelect.addEventListener('change', function (event) {
    const pickedType = event.target.value;
    const fromPicked = fromSelect.value; 

    preventSameUnits(pickedType, fromPicked, fromSelect);
    return setConvertedValue(fromSelect.value, pickedType, fromInput.value, toInput);
});
fromInput.addEventListener('change', function (event) {
    const value = event.target.value; 
    return setConvertedValue(fromSelect.value, toSelect.value, value, toInput);
});
toInput.addEventListener('change', function (event) {
    const value = event.target.value; 
    return setConvertedValue(toSelect.value, fromSelect.value, value, fromInput);
});

document.addEventListener('DOMContentLoaded', function () {
    setUnitsInSelects(typeSelect.value);
    fromInput.focus();
});
