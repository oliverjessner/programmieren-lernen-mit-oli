import { $ } from 'bun';

await $`cat bread.txt | wc -w`;
