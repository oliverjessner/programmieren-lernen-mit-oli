import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/weather': 'http://localhost:3000',
        },
    },
});
