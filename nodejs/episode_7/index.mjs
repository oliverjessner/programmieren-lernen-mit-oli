import Express from 'express';
import bodyParser from 'body-parser';

const app = Express();
const PORT = 3000;
const user = {
    name: 'oli',
    lang: 'javascript'
};

app.use(bodyParser.json({
    limit: '1mb',
    type: 'application/json'
}));

app.get('/user', function (req, response) {
    return response.status(200).send(user);
});
app.post('/changeUsername', function (req, response) {
    const { name } = req.body;

    user.name = name; 

    return response.status(201).send({ valid: true });
});

app.use('/', Express.static('./public'));
app.listen(PORT, () => console.log('Server Started'));