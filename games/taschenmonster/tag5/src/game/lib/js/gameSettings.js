const gameSettings = {
    grid: localStorage.getItem('grid') === 'true',
    collisonBlock: localStorage.getItem('collisionBlock') === 'true', 
};
const isDevMode = Object.values(gameSettings).some(v => v);

if (isDevMode) {
    console.log('You are in dev mode!');
    console.log(gameSettings);
}

export default Object.freeze(gameSettings);