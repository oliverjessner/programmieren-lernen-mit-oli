/*
Das Addieren und Subtrahieren von Matrizen ist in vielen 
Bereichen der Mathematik, Informatik, Physik und 
Ingenieurwissenschaften wichtig. Hier sind einige Gründe, 
warum du Matrizen addieren und subtrahieren möchtest:

1. Lineare Algebra und Vektoroperationen
Lineare Gleichungssysteme: In der linearen Algebra werden 
Matrizen oft verwendet, um lineare Gleichungssysteme 
darzustellen. Die Addition und Subtraktion von Matrizen 
kann verwendet werden, um diese Systeme zu manipulieren und
 zu lösen.

Vektoraddition: Matrizen können verwendet werden, um 
Vektoren darzustellen. Das Addieren von Matrizen entspricht 
der Vektoraddition, was in vielen mathematischen und 
physikalischen Anwendungen vorkommt.

2. Grafik- und Bildverarbeitung
Bildbearbeitung: In der Bildverarbeitung können Matrizen verwendet
 werden, um Bilder zu repräsentieren, wobei jeder Eintrag einer 
 Matrix einen Pixelwert darstellt. Das Addieren oder Subtrahieren 
 von Matrizen kann verwendet werden, um Bilder zu kombinieren 
 oder Bildmanipulationen wie das Überlagern von Bildern 
 durchzuführen.

Transformationen: Transformationen in der Computergrafik, wie 
z.B. das Verschieben, Skalieren oder Rotieren von Objekten, 
können durch Matrixoperationen modelliert werden. Addition 
und Subtraktion können in bestimmten Transformationen genutzt werden.

3. Physik und Ingenieurwissenschaften
Systemanalyse: In der Physik und im Ingenieurwesen werden Systeme 
oft durch Matrizen beschrieben. Das Addieren und Subtrahieren 
dieser Matrizen kann verwendet werden, um Kräfte, Ströme oder 
andere physikalische Größen zu kombinieren oder Differenzen zu 
berechnen.

Signalverarbeitung: In der Signalverarbeitung können Matrizen 
verwendet werden, um Signale zu modellieren. Das Addieren und 
Subtrahieren von Matrizen kann verwendet werden, um Signale zu 
kombinieren oder Rauschen von einem Signal zu subtrahieren.

4. Statistik und Datenanalyse
Datenmanipulation: In der Statistik und Datenanalyse können 
Matrizen verwendet werden, um Datensätze zu repräsentieren. 
Addition und Subtraktion können verwendet werden, um Daten zu 
kombinieren, zu normalisieren oder Unterschiede zwischen 
Datensätzen zu berechnen.

Kovarianzmatrizen: In der Statistik werden Matrizen verwendet, 
um Beziehungen zwischen verschiedenen Datensätzen zu analysieren. 
Das Addieren und Subtrahieren solcher Matrizen kann verwendet 
werden, um Variationen und Korrelationen zu berechnen.

5. Simulation und Modellierung
Dynamische Systeme: In der Modellierung dynamischer Systeme werden
 Matrizen verwendet, um Zustandsänderungen zu beschreiben. Addition
  und Subtraktion können verwendet werden, um die Entwicklung von 
  Zuständen über die Zeit hinweg zu berechnen.

Finanzmathematik: In der Finanzmathematik können Matrizen verwendet
werden, um Portfolios und Investitionen zu modellieren.
Addition und Subtraktion helfen dabei, Gewinne und Verluste 
oder Risikobewertungen zu berechnen.

6. Maschinelles Lernen
Netzwerkgewichte: In neuronalen Netzwerken, die in der künstlichen 
Intelligenz verwendet werden, können Matrizen die Gewichte der 
Verbindungen zwischen Neuronen darstellen. Die Anpassung dieser 
Gewichte durch Addition oder Subtraktion ist ein wesentlicher 
Bestandteil des Lernprozesses. 

*/
const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
];

const matrixB = [
    [7, 8, 9],
    [10, 11, 12],
];

function addMatrices(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        const row = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

console.log(addMatrices(matrixA, matrixB));
