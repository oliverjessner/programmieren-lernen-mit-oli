import setData from './setData.js';

const file = document.querySelector('input');
const button = document.querySelector('#upload');
const smallTopRed = document.querySelector('#small-top-red');
const smallTopBlue = document.querySelector('#small-top-blue');
const smallTopGreen = document.querySelector('#small-top-green');

file.addEventListener('change', handleSubmit);
button.addEventListener('click', () => file.click());

function flashStart() {
    smallTopRed.style.animation = '0.5s infinite small-blink';
    smallTopBlue.style.animation = '0.8s infinite small-blink';
    smallTopGreen.style.animation = '1s infinite small-blink';
}

function flashStop() {
    smallTopRed.style.animation = 'none';
    smallTopBlue.style.animation = 'none';
    smallTopGreen.style.animation = 'none';
}

function handleSubmit({ target }) {
    const [file] = target.files;
    const reader = new FileReader();

    flashStart();
    reader.onload = function (evt) {
        const img = {
            name: file.name,
            base64: evt.target.result,
        };

        sendImage(img);
    };

    reader.readAsDataURL(file);
}

function getFormDataForImage(postData) {
    const formData = new FormData();

    formData.append('file', postData.base64);
    formData.append('name', postData.name);

    return formData;
}

async function sendImage(imgData) {
    const respone = await fetch('/upload', {
        method: 'POST',
        body: getFormDataForImage(imgData),
    });
    const json = await respone.json();

    flashStop();
    await setData(json);
}
