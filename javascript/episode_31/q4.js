/* Q4: Was ist ein ES Modul in JavaScript und wie erstellt man eins? */

/*
Ein ES-Modul (ECMAScript-Modul) in JavaScript ist ein Mechanismus,
der es ermöglicht, Code in separate Dateien aufzuteilen und 
wiederverwendbare Module zu erstellen. ES-Module sind ein Teil des ECMAScript-Standards.
*/

// module.js
export const greeting = 'Hello, ';

export function sayHello(name) {
    return greeting + name;
}

// main.js
import { greeting, sayHello } from './module.js';

// module.js
export default function sayHello(name) {
    return greeting + name;
}

// main.js
import sayHello from './module.js';

<script type="module"></script>;
