import { spawnSync } from 'bun';

const { resourceUsage } = spawnSync(['bun', '-e', "console.log('Hello world!')"]);

console.log(resourceUsage);
