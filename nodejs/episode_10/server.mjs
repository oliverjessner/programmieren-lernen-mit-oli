import Express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = Express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message', msg => {
        io.emit('message', msg);
    });
});

app.use('/', Express.static('./public'));
app.use('/lib', Express.static('./node_modules'));
httpServer.listen(3000, () => {
    console.log(`Socket.IO server running at http://localhost:3000/`);
});
