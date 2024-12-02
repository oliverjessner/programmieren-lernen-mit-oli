/*
Ein Array zu transponieren bedeutet, seine Zeilen und Spalten 
zu vertauschen. Es gibt verschiedene Gründe, warum du ein Array 
transponieren möchtest, abhängig von dem Kontext und der 
spezifischen Anwendung:

Matrixoperationen: In der linearen Algebra ist die Transponierung 
einer Matrix eine häufige Operation. Sie wird z.B. benötigt, um 
das Skalarprodukt zu berechnen oder um Matrizenmultiplikationen 
durchzuführen, insbesondere wenn Matrizen unterschiedlicher 
Form (z.B. m×n und 𝑛×𝑚) kombiniert werden sollen.

Datenmanipulation: In der Datenanalyse kannst du ein Array 
transponieren, um die Daten in einer für die Analyse oder 
Visualisierung geeigneteren Form zu haben. Beispielsweise, 
wenn du mit Daten arbeitest, die ursprünglich in Zeilen 
organisiert sind, du aber die Spalten als Hauptdimension 
betrachten möchtest.

Bessere Lesbarkeit: Manchmal ist die transponierte Form eines
Arrays leichter zu lesen und zu interpretieren. Wenn zum Beispiel 
die Daten in einer tabellarischen Form vorliegen und die 
Spaltenheader zu den Zeilenheadern gemacht werden sollen.

Numerische Stabilität: In bestimmten numerischen Algorithmen 
kann die Transponierung einer Matrix notwendig sein, um die 
Berechnungen stabiler oder effizienter zu machen.

Kompatibilität: Manchmal musst du ein Array transponieren, 
um es an eine Funktion oder ein Modul anzupassen, das eine 
bestimmte Form erwartet.
*/

const matrix = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
];

function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            const swap = matrix[i][j];
            console.log('i: ', i, 'j: ', j, matrix[i][j], ' wird getauscht gegen: ', matrix[j][i]);
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = swap;
        }
    }
}

transpose(matrix);

console.log(matrix);
