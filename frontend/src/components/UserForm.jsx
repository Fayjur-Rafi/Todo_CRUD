import { useState, useEffect } from "react";

export default function UserForm({ onSubmit, editingUser }) {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingUser ? "Update User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className={`px-6 py-2 rounded-lg text-white ${
            editingUser
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {editingUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}