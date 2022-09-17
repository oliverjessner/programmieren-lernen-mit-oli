import Express from 'express';

const app = Express();

app.use('/', Express.static('./'));
app.listen(3000, () => console.log('Server Started'));