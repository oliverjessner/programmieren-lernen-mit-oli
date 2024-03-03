/* Chapter: 
Upload auf Backend und Frontendend,
Alles zusammenfügen     */
import setData from './setData.js';

const file = document.querySelector('input');
const button = document.querySelector('#upload');
const smallTopRed = document.querySelector('#small-top-red');
const smallTopBlue = document.querySelector('#small-top-blue');
const smallTopGreen = document.querySelector('#small-top-green');

file.addEventListener('change', handleSubmit);
button.addEventListener('click', () => file.click());

function handleSubmit({ target }) {}

function getFormDataForImage(postData) {}

async function sendImage(imgData) {}
