import setData from './setData.js';

const file = document.querySelector('input');
const button = document.querySelector('#upload');

file.addEventListener('change', handleSubmit);
button.addEventListener('click', () => file.click());

function handleSubmit({ target }) {
    const [file] = target.files;
    const reader = new FileReader();
    const imgTag = document.createElement('img');
    const url = URL.createObjectURL(file);

    reader.onload = function (evt) {
        imgTag.src = url;

        imgTag.onload = function () {
            const img = {
                name: file.name,
                base64: evt.target.result,
            };

            URL.revokeObjectURL(url);
            sendImage(img);
        };
    };

    reader.readAsDataURL(file);
}

function getFormDataForImage(postData) {
    const formData = new FormData();
    formData.append('file', postData.base64);
    formData.append('name', postData.name);
    formData.append('type', 'image');

    return formData;
}

async function sendImage(imgData) {
    const respone = await fetch('/upload', {
        method: 'POST',
        body: getFormDataForImage(imgData),
    });
    const json = await respone.json();

    console.log(json);
    return setData(json);
}
