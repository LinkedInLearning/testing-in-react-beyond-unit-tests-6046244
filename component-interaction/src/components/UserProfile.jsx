
function UserProfile({ onClose }) {
  return (
    <div role="dialog">
      <h2>User Profile</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default UserProfile;