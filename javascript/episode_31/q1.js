/* Q1: Was ist der Unterschied zwischen "==" und "===" in JavaScript? */

const sameDoubleEqual = 5 == '5';
const sameTrippleEqual = 5 === '5';
const funny1 = 0 == [];

/* true, false */
console.log(sameDoubleEqual, sameTrippleEqual);

/* 
"==" (Gleichheitsoperator):
Das doppelte Gleichheitszeichen "==" wird für einen lockeren Gleichheitsvergleich verwendet. 
Es vergleicht die Werte auf beiden Seiten des Operators, nachdem es eine Typumwandlung 
durchgeführt hat. Das bedeutet, dass es versucht, die Operanden in denselben Typ umzuwandeln, 
bevor der Vergleich durchgeführt wird. Wenn zum Beispiel eine Zeichenkette und eine Zahl mit 
"==" verglichen werden, wird JavaScript versuchen, die Zeichenkette in eine Zahl umzuwandeln, 
bevor der Vergleich durchgeführt wird.
*/

/*
"===" (Strikter Gleichheitsoperator):
Das dreifache Gleichheitszeichen "===" wird für einen strikten Gleichheitsvergleich verwendet. 
Hierbei werden nicht nur die Werte, sondern auch die Typen der Operanden verglichen. Wenn die 
Typen nicht übereinstimmen, ergibt der Vergleich "false".
 */
