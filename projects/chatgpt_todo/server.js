const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = path.resolve(__dirname, "todos.db");
const db = new sqlite3.Database(dbPath);

// Erstelle die Tabelle todos, falls sie nicht existiert
db.serialize(() => {
    db.run(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, priority INTEGER, completed BOOLEAN)",
    );
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// API zum Abrufen aller Todos
app.get("/api/todos", (req, res) => {
    db.all("SELECT * FROM todos", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// API zum Hinzufügen eines neuen Todos
app.post("/api/todos", (req, res) => {
    const { text, priority } = req.body;
    if (!text || !priority) {
        res.status(400).json({ error: "Text and priority are required fields" });
        return;
    }
    db.run("INSERT INTO todos (text, priority, completed) VALUES (?, ?, 0)", [text, priority], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, text, priority, completed: false });
    });
});

// API zum Aktualisieren eines Todos
app.put("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    const { text, priority, completed } = req.body;
    db.run(
        "UPDATE todos SET text = ?, priority = ?, completed = ? WHERE id = ?",
        [text, priority, completed, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ id, text, priority, completed });
        },
    );
});

// API zum Löschen eines Todos
app.delete("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM todos WHERE id = ?", id, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ deleted: true });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
