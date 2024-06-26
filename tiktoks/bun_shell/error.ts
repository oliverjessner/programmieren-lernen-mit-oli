import { $ } from 'bun';

const { stdout, stderr, exitCode } = await $`something-that-may-fail`.nothrow().quiet();

if (exitCode !== 0) {
    console.log(`Non-zero exit code ${exitCode}`);
}

console.log(stdout);
console.log(stderr);
