import { formatDate } from '../utils/formatDate'
import { useUserClick } from '../hooks/useUserClick'

export default function UserCard({ user, onSelect }) {
  const handleClick = useUserClick(onSelect, user)

  return (
    <div onClick={handleClick}>
      <h3>{user.name}</h3>
      <p>Joined: {formatDate(user.joined)}</p>
    </div>
  );
}