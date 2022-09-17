import fs from 'node:fs/promises';

const path = './options/options_oli.json';

fs.stat(path).then(function (stat) {
    console.log(stat);
    fs.unlink(path).then().catch(console.log);
}).catch(console.error);
