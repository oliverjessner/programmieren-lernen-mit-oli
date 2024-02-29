import { serveStatic } from 'hono/bun';
import { Hono } from 'hono';
import upload from './upload';
import dotenv from 'dotenv';

const app = new Hono();
const [, , isStaging] = process.argv;

dotenv.config();
app.use('/*', serveStatic({ root: './public/' }));
upload(app);

console.log('Server is running on port http://localhost:3000');

export default app;
