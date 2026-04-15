import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit, onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 opacity-50 animate-fade">
        <p className="text-lg">No tasks found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-4 px-2">Your Tasks</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
