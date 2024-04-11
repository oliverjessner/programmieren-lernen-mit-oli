import { Glob } from 'bun';

const glob = new Glob('**/*.ts');

for await (const path of glob.scan('.')) {
    console.log(path);
}
