import { createClient } from 'redis';

const client = createClient();
await client.connect();

const mainStation = {
    member: 'Hauptbahnhof',
    latitude: '47.8130703',
    longitude: '13.0401998',
};
const foods = [
    {
        latitude: '47.7899046',
        longitude: '13.0478107',
        member: 'vegetalian',
    },
    {
        member: 'Nagano',
        latitude: '47.8004899',
        longitude: '13.0398164',
    },
    {
        member: 'Surya',
        latitude: '47.8108343',
        longitude: '13.0051937',
    },
    {
        member: 'Cup & Cino',
        latitude: '47.8083389',
        longitude: '13.038694',
    },
];
await client.geoAdd('foods', foods);
//const geopos = await client.geoPos('foods', 'vegetalian');

const nextToMainStation = await client.geoSearchWith(
    'foods',
    mainStation,
    {
        radius: 1,
        unit: 'km',
    },
    ['WITHDIST', 'WITHCOORD'],
);

console.log(nextToMainStation);

await client.disconnect();
