const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div className={`todo-item animate-fade ${todo.completed ? 'completed' : ''}`}>
      <div className="flex items-start gap-4 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, !todo.completed)}
          className="w-5 h-5 mt-1 cursor-pointer accent-indigo-500"
          style={{ width: '20px', height: '20px' }}
        />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="todo-title font-semibold text-lg">{todo.title}</h3>
            <span className={`priority-badge priority-${todo.priority}`}>
              {todo.priority}
            </span>
          </div>
          {todo.description && (
            <p className="text-sm opacity-60 line-clamp-2">{todo.description}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        <button
          onClick={() => onEdit(todo)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-indigo-400"
          title="Edit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-red-400"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
