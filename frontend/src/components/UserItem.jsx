export default function UserItem({ user, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition">
      
      <div>
        <h3 className="font-semibold text-lg">{user.name}</h3>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user)}
          className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(user.id)}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>

    </div>
  );
}