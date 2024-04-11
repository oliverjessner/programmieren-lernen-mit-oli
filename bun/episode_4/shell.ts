import { $ } from 'bun';

const response = await fetch('https://example.com');
await $`cat < ${response} | wc -c`;
