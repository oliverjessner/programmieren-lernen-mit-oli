import { createClient } from 'redis';

const client = createClient();
await client.connect();

await client.zAdd('actors', [
    { score: 1947, value: 'arnold s.' },
    { score: 1979, value: 'aaron p.' },
    { score: 1942, value: 'harrison f.' },
]);
const range = await client.zRange('actors', 0, -1);
console.log(range);
const rangeScores = await client.zRangeWithScores('actors', 0, -1);
console.log(rangeScores);
await client.zRem('actors', 'aaron p.');

await client.disconnect();
