import { useState, useEffect } from "react";

const TodoForm = ({ onSubmit, editingTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  useEffect(() => {
    if (editingTodo) {
      setTodo(editingTodo);
    } else {
      setTodo({ title: "", description: "", priority: "Medium" });
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo);
    setTodo({ title: "", description: "", priority: "Medium" });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card mb-8 animate-fade">
      <h2 className="text-xl font-semibold mb-6">
        {editingTodo ? "Edit Task" : "Add New Task"}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 opacity-70">Task Title</label>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 opacity-70">Description (Optional)</label>
          <textarea
            placeholder="Add details..."
            rows="2"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 opacity-70">Priority</label>
          <select
            value={todo.priority}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="High">Advance</option>
          </select>
        </div>
        <button type="submit" className="btn-primary w-full mt-4">
          {editingTodo ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
