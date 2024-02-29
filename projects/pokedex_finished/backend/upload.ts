import { Hono } from 'hono';
import vision from './vision';
import pokeapi from './pokeapi';
import generateVoice from './voice';

type body = {
    file: string;
    name: string;
};

function base64ToImage(base64: string) {
    const matches: RegExpMatchArray | null = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (!matches) {
        throw new Error('Invalid input string');
    }

    return Buffer.from(matches[2], 'base64');
}

export default function upload(app: Hono) {
    app.post('/upload', async c => {
        const body: body = await c.req.parseBody();
        console.log('Starting Vision API');
        const name: string = await vision(body.file);
        console.log('Fetching data from PokeAPI');
        const data = await pokeapi(name);
        console.log('Generating voice url');
        const voice = await generateVoice(data);
        console.log('Returning data', voice);
        return c.json({ name, data, voice });
    });
}
