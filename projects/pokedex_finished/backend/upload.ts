import { Hono } from 'hono';
import vision from './vision';
import pokeapi from './pokeapi';
import generateVoice from './voice';

type body = {
    file: string;
    name: string;
};

export default function upload(app: Hono) {
    app.post('/upload', async function (c) {
        const body: body = await c.req.parseBody();
        console.log('Start Vision Api');
        const name: string = await vision(body.file);
        console.log('Start fetching Data from PokeAPI');
        const data = await pokeapi(name);
        console.log('Generate voice url');
        const voice = await generateVoice(data);
        console.log('Returning data', voice);

        return c.json({ name, data, voice });
    });
}
