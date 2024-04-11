import express from 'express';

const app = express();

// static file serving
app.use(express.static('.'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
