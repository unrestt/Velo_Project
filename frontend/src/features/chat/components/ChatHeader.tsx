interface Props {
  username?: string;
  avatar?: string;
}

export const ChatHeader = ({ username, avatar }: Props) => {
  return (
    <div className="px-6 py-4 border-b bg-gray-50/50 shrink-0 flex items-center gap-3">
      {avatar && (
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full object-cover shadow-sm"
        />
      )}
      <h2 className="text-xl font-medium text-gray-800">
        {username || 'Użytkownik'}
      </h2>
    </div>
  );
};
