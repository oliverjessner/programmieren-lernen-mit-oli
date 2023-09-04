import { createClient } from 'redis';

const client = createClient();
const subscriber = client.duplicate();

await client.connect();
await subscriber.connect();

/*
 ? = channel, chxnnel 
 * = chnnel oder cheeeenel
 [ae] = channel und chennel
*/

await subscriber.pSubscribe('ch[ae]nnel', function (message, channel) {
    console.log(message, channel);
});

await client.publish('channel', 'hello world');
await client.publish('chnnel', 'Hallo Welt');
await client.publish('cheeeeennel', 'Hey Welt');
