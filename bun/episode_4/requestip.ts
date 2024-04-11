import { serve } from 'bun';

const server = serve({
    port: 0, // random port 🙈
    fetch(request) {
        console.log(server.requestIP(request)); // "127.0.0.1"
        return new Response();
    },
});

fetch(server.url);
