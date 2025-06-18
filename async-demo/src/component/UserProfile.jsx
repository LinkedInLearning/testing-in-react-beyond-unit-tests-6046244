import { useEffect, useState } from 'react';
import { getUser } from '../api';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, []);

  return status === 'loading' ? (
    <p>Loading user...</p>
  ) : status === 'error' ? (
    <p>Error loading user</p>
  ) : (
    <h1>Hello, {user.firstName} {user.lastName}</h1>
  );
}