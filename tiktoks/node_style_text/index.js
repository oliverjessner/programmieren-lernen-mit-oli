/* Native without any lib */
import { styleText } from 'node:util';

const errorMessage = styleText('red', 'Error oh my gawd!');

console.log(errorMessage);
console.log(styleText('underline', styleText('italic', 'Hallo Welt!')));
