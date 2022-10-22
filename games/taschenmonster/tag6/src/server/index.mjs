import Express from 'express';

const app = new Express(); 
const PORT = 3000;

app.use('/', Express.static('./game'));
app.listen(PORT, () => console.log('Hey the taschenmonster game server is running!'));