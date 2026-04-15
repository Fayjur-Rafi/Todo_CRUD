import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
} from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (data) => {
    try {
      if (editingTodo) {
        await updateTodo(editingTodo.id, data);
        setEditingTodo(null);
      } else {
        await createTodo(data);
      }
      fetchTodos();
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this task?")) {
        await deleteTodo(id);
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = async (id, completed) => {
    try {
      await toggleTodo(id, completed);
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
          TodoMaster
        </h1>
        <p className="opacity-50">Manage your tasks with elegance</p>
      </header>

      <TodoForm onSubmit={handleSubmit} editingTodo={editingTodo} />

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;