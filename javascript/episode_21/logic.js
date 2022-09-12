'use strict';
const chars = new Map();

chars.set('oli', { weapon: 'sword' });
chars.set('berni', { weapon: 'bow & arrow' });

chars.set('oli', { weapon: 'hand' });

if (chars.has('oli')) {
    console.log('it has an oli');
}

console.log([...chars.values()]);
console.log([...chars.keys()]);
