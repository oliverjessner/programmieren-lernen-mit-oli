const playerName = 'franz'; 
const weapon = 'hands';
const health = 0;

console.log(typeof playerName);
console.log(typeof health);

if (health === 0) {
    console.log('You are dead');
}

if (playerName === 'franz') {
    console.log('Hi franz'); 

    if (weapon === 'sword') {
        console.log('Its a sword');
    } else {
        console.log('Its not a sword');
    }
} else {
    console.log('You are not oli or berni.');  
}
