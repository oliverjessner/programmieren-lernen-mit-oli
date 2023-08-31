/* Q6: Was ist der Unterschied zwischen synchronem und asynchronem Code in JavaScript? */

/*
Synchroner und asynchroner Code beziehen sich auf die Art und Weise, 
wie JavaScript mit Aufgaben und Operationen umgeht, die Zeit benötigen, 
um abgeschlossen zu werden, wie beispielsweise das Laden von Dateien, 
das Herstellen von Netzwerkverbindungen oder das Verarbeiten von Benutzereingaben. 
Der Unterschied liegt darin, wie der Code auf die Beendigung solcher Aufgaben 
wartet oder nicht wartet.
*/

console.log('Start Sync');
for (let i = 0; i < 1_000; i++) {
    if (i === 1_000 - 1) {
        console.log('done Sync');
    }
}
console.log('End Sync');

console.log('Start async');
for (let i = 0; i < 1_000; i++) {
    setTimeout(function () {
        if (i === 1_000 - 1) {
            console.log('done async');
        }
    }, 1000);
}
console.log('End async');
