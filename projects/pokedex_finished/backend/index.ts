import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';
import upload from './upload';
import dotenv from 'dotenv';

const app = new Hono();

dotenv.config();
app.use('/*', serveStatic({ root: './public' }));
app.use('/*', serveStatic({ root: './assets/voices' }));
upload(app);

console.log('Server is running on port http://localhost:3000');

export default app;
