import * as PlayHTAPI from 'playht';
import fs from 'node:fs/promises';

const edition = 'yellow';

PlayHTAPI.init({
    apiKey: process.env.PLAYHT_API_KEY,
    userId: process.env.PLAYHT_USER_ID,
});

/*
PlayHTAPI.listVoices().then(voices => {
    console.log(voices.find(voice => voice.isCloned)?.id);
});*/

async function downloadVoice(url: string) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const name = url.split('/').pop();

    await fs.writeFile(`./assets/voices/${name}`, Buffer.from(buffer));

    return name;
}

function findSentence(data: object): string {
    const found = data.flavor_text_entries.find(function (entry: any) {
        return entry.language.name === 'en' && entry.version.name === edition;
    })?.flavor_text;

    if (found) {
        return found;
    }

    return data.flavor_text_entries.find((entry: any) => entry.language.name === 'en').flavor_text;
}

export default async function generateVoiceUrl(data: object): Promise<string> {
    const sentence = findSentence(data).replaceAll(/\r?\n|\r/g, '');
    const response = await PlayHTAPI.generate(sentence, {
        voiceId: 's3://voice-cloning-zero-shot/825aa872-9ce9-40a6-988d-79bf9223449d/enhanced/manifest.json',
        outputFormat: 'mp3',
        voiceEngine: 'PlayHT2.0',
        sampleRate: 44100,
        speed: 1,
    });
    const voiceURL = (await downloadVoice(response.audioUrl)) || '';

    return voiceURL;
}
