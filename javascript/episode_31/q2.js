/* Q2: Was sind First-Class-Citizen-Funktionen in JavaScript? */

/* 
First-Class-Citizen-Funktionen sind Funktionen, die wie Variablen 
behandelt werden können. Sie können als Parameter an andere Funktionen 
übergeben werden, können von anderen Funktionen zurückgegeben werden.
PS: Weil Funktionen First-Class-Citizen sind, können sie auch Variablen zugewiesen werden.
*/

function sub(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function printResult(fn, p1, p2) {
    console.log(fn(p1, p2));
}

printResult(add, 2, 2);
printResult(sub, 5, 3);
