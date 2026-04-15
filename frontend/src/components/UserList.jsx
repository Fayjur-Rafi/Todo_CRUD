import UserItem from "./UserItem";

export default function UserList({ users, onDelete, onEdit }) {
  return (
    <div className="grid gap-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found</p>
      ) : (
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}