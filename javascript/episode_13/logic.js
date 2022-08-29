'use strict';
const userNameInput = document.querySelector('input[type="text"]');
const imageWidthInput = document.querySelector('input[type="number"]');
const saveButton = document.querySelector('#save-bttn');
const removeButton = document.querySelector('#remove-bttn');
const username = localStorage.getItem('username');
const img = document.querySelector('img');
const imageWidth = img.getAttribute('width');

userNameInput.focus(); 

if (username) {
    userNameInput.value = username;
}

saveButton.addEventListener('click', function () {
    localStorage.setItem('username', userNameInput.value);
});
removeButton.addEventListener('click', function () {
    localStorage.removeItem('username');
    userNameInput.value = '';
});
imageWidthInput.addEventListener('change', function () {
    console.log(imageWidthInput.value);
    img.setAttribute('width', imageWidthInput.value);
});

img.setAttribute('src', 'https://oliverjessner.github.io/img/oli.png');
imageWidthInput.setAttribute('value', imageWidth);