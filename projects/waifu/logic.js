const baseURL = 'https://api.waifu.im/';
const tags = [
    'uniform',
    'maid',
    'waifu',
    'marin-kitagawa',
    'mori-calliope',
    'raiden-shogun',
    'oppai',
    'selfies',
];
const tagSelect = document.querySelector('.tag-select');
const img = document.querySelector('img');
const button = document.querySelector('button');
const info = document.querySelector('.info-container');

async function getRandomPicture (tag) {
    const request = await fetch(`${baseURL}random?selected_tags=${tag}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }); 
    const { images } = await request.json();

    return images[0];
}

function setInfo ({ tags }) {
    info.innerHTML = tags.map(t => `<p>${t.description}</p>`).join('');
}

function buttonActivate () {
    button.disabled = false;
    button.classList.remove('deactivated');
    button.innerText = 'Random 🥵';
}

function buttondeactivate () {
    button.disabled = true;
    button.classList.add('deactivated');
    button.innerText = 'loading';
}

button.addEventListener('click', async function () {
    buttondeactivate();

    const selectedTag = tagSelect.value;
    const rndImg = await getRandomPicture(selectedTag);
    
    img.setAttribute('src', rndImg.url);
    setInfo(rndImg); 

    img.onload = function () {
        buttonActivate(); 
    };

    document.querySelector('html').style.backgroundColor = rndImg.dominant_color;
});
document.addEventListener('DOMContentLoaded', function () {
    tagSelect.innerHTML = tags.map(t => `<option value="${t}">${t}</option>`).join('');
});