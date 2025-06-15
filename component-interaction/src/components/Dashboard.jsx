import { useState } from 'react';
import UserProfile from './UserProfile';

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowProfile(true)}>View Profile</button>

      {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
    </div>
  );
}

export default Dashboard;