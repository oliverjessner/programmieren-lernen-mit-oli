import Express from 'express';

const PORT = 3000; 
const app = Express();

app.use('/', Express.static('./'));
app.listen(PORT, () => { console.log('Time for some Waifu 🥵.'); })
