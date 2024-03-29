const cells = document.querySelectorAll(".cell");
let turn = "X";

// Funktion zum Aktualisieren der Spielfeldanzeige
function updateBoard() {
    cells.forEach((cell) => {
        cell.textContent = cell.dataset.value;
    });
}

// Event-Listener für Klicks auf die Spielfelder
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.dataset.value) {
            return;
        }

        cell.dataset.value = turn;
        updateBoard();

        // Prüfe auf Sieg
        if (checkWinner()) {
            alert(`Spieler ${turn} hat gewonnen!`);
            return;
        }

        // Wechsle den Spieler
        turn = turn === "X" ? "O" : "X";
    });
});

// Funktion zum Prüfen auf Sieg
function checkWinner() {
    if (
        cells[0].dataset.value === cells[1].dataset.value &&
        cells[1].dataset.value === cells[2].dataset.value &&
        cells[0].dataset.value
    ) {
        return cells[0].dataset.value;
    }

    // ... Implementiere die Überprüfung von Spalten und Diagonalen ...

    return null;
}
