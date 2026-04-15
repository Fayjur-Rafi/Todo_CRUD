import db from "../config/db.js";

// CREATE
export const createTodo = (req, res) => {
  const { title, description, priority } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const sql = "INSERT INTO todos (title, description, priority) VALUES (?, ?, ?)";
  db.query(sql, [title, description, priority || 'Medium'], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Todo created", id: result.insertId });
  });
};

// READ ALL
export const getTodos = (req, res) => {
  db.query("SELECT * FROM todos ORDER BY created_at DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// UPDATE
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, priority, completed } = req.body;

  const sql = "UPDATE todos SET title=?, description=?, priority=?, completed=? WHERE id=?";
  db.query(sql, [title, description, priority, completed, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Todo updated" });
  });
};

// DELETE
export const deleteTodo = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM todos WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Todo deleted" });
  });
};

// TOGGLE COMPLETE
export const toggleTodo = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const sql = "UPDATE todos SET completed=? WHERE id=?";
  db.query(sql, [completed, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Status updated" });
  });
};
