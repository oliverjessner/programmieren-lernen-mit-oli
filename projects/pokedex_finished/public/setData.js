const picture = document.querySelector('img');
const dexName = document.querySelector('#dex-name');
const type = document.querySelector('#type');
const dexId = document.querySelector('#dex-id');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const audioCry = document.querySelector('#audio-cry');
const audioDesc = document.querySelector('#audio-desc');
const playCry = document.querySelector('#play-cry');
const button = document.querySelector('#upload');

playCry.addEventListener('click', () => audioCry.play());

async function playAudio() {
    button.style.animation = 'blink 1s infinite';

    const done = await new Promise(res => {
        audioDesc.play();
        audioDesc.onended = res;
    });

    button.style.animation = 'none';
}

export default async function setData({ data, voice }) {
    dexName.textContent = data.name;
    dexId.textContent = `#${data.id}`;
    type.textContent = data.types.map(type => type.type.name).join(' / ');
    audioCry.src = data.cries.latest;
    audioDesc.src = voice;
    picture.src = data.sprites.front_default;
    height.textContent = `Height: ${data.height / 10}m`;
    weight.textContent = `Weight: ${data.weight / 10}kg`;

    await playAudio();
}
