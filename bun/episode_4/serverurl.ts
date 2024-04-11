import { serve } from 'bun';

const server = serve({
    port: 5001,
    fetch(request) {
        return new Response();
    },
});

console.log(`${server.url}`);
