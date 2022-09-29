import discord from 'discord.js';

const { Client, GatewayIntentBits } = discord;
const url = 'https://api.satou-chan.xyz/api/endpoint/anime';
const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
];
const client = new Client({ intents });

client.login(process.env.TOKEN);
client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));
client.on('messageCreate', async function (message) {
    if (message.content !== 'anime') {
        return;
    }
    
    const response = await fetch(url, {
        method: 'GET'
    });
    const json = await response.json();

    return message.channel.send({ content: json.url });
});