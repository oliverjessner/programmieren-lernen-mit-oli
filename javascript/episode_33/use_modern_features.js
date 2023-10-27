// bad
const player = {
    player1: 'John',
    player2: 'Jane',
    player3: 'Joe',
};
// Server calls
obj['player4'] = 'Jack';

// good
const player2 = new Map();

player2.set('player1', 'John');
player2.set('player2', 'Jane');
player2.set('player3', 'Joe');

if (!player2.has('player4')) {
    player2.set('player4', 'Jack');
}
