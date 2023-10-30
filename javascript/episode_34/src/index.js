import { smallButton } from './button';
import table from './table';

const str = 'Hello world';

function main() {
    const input = document.querySelector('input');

    input.value = str;
    smallButton();
    table();
}
main();
