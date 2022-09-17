import Express from 'express';

const app = Express();
const PORT = 3000; 

app.use('/hello/', Express.static('./public'));
app.use('/pub/', Express.static('./public'));
app.listen(PORT, () => console.log('Server Started'));