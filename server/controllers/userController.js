import db from "../config/db.js";

// CREATE
export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User created" });
  });
};

// READ
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// UPDATE
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const sql = "UPDATE users SET name=?, email=? WHERE id=?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User updated" });
  });
};

// DELETE
export const deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User deleted" });
  });
};