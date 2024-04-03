import Express from 'express';

const app = Express();
const PORT = 5002;

app.use('/', Express.static('./public'));
app.listen(PORT, () => console.log('Server Started'));
