document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const resetButton = document.getElementById("resetButton");

    let currentPlayer = "X";
    let gameStatus = ["", "", "", "", "", "", "", "", ""]; // 3x3 Board als flaches Array

    // Erstelle das Spielfeld
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
    }

    // Event Listener für Reset-Button hinzufügen
    resetButton.addEventListener("click", resetGame);

    // Funktion, die bei einem Klick auf eine Zelle aufgerufen wird
    function handleCellClick(event) {
        const index = event.target.dataset.index;
        if (gameStatus[index] === "" && !checkWinner()) {
            gameStatus[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            if (checkWinner()) {
                alert(`Spieler ${currentPlayer} hat gewonnen!`);
            } else if (!gameStatus.includes("")) {
                alert("Unentschieden!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    // Funktion zur Überprüfung, ob ein Spieler gewonnen hat
    function checkWinner() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // horizontale Reihen
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // vertikale Reihen
            [0, 4, 8],
            [2, 4, 6], // diagonale Reihen
        ];
        for (let condition of winConditions) {
            if (
                gameStatus[condition[0]] !== "" &&
                gameStatus[condition[0]] === gameStatus[condition[1]] &&
                gameStatus[condition[1]] === gameStatus[condition[2]]
            ) {
                return true;
            }
        }
        return false;
    }

    // Funktion zum Zurücksetzen des Spiels
    function resetGame() {
        gameStatus = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.textContent = "";
        });
    }
});
