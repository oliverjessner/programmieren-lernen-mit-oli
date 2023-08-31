import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Client Error', err));

await client.connect();

await client.hSet('human', {
    age: 32,
    name: 'oliver',
    type: 'austria',
});

await client.hIncrBy('human', 'age', -5);

console.log({ ...(await client.hGetAll('human')) });

await client.disconnect();
