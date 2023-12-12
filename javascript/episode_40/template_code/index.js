import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

await server.register(inert);

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: `./public/`,
            index: ['index.html'],
        },
    },
});

await server.start();

console.log('Server running at:', server.info.uri);
