// Allowed input chars: U,D,L,R
function moveRobot2(moves) {
    return (
        moves.length % 2 === 0 &&
        moves.split('U').length === moves.split('D').length &&
        moves.split('L').length === moves.split('R').length
    );
}

function moveRobot(moves) {
    let x = 0;
    let y = 0;
    const changePosition = {
        U: _ => y++,
        D: _ => y--,
        R: _ => x++,
        L: _ => x--,
    };

    for (const move of moves) {
        changePosition[move]();
    }

    return x === 0 && y === 0;
}

console.log(moveRobot('URRLLD'), moveRobot2('URRLLD'));
console.log(moveRobot('UU'), moveRobot2('UU'));
console.log(moveRobot('RLUUD'), moveRobot2('RLUUD'));
console.log(moveRobot('UD'), moveRobot2('UD'));
console.log(moveRobot('RL'), moveRobot2('RL'));
