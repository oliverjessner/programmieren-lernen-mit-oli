import Express from 'express';
import bodyParser from 'body-parser';
import authenticate from './authenticate.js';

const app = Express();
const PORT = 3000;

app.use(
    bodyParser.json({
        limit: '512kb',
        type: 'application/json',
    }),
);

app.get('/weather', authenticate, function (_, response) {
    return response.status(200).send({
        weather: 'sunny',
        temp: 32,
    });
});

app.listen(PORT, function () {
    console.log('http://localhost:3000/weather');
});
