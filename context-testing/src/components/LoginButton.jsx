import { useAuth } from '../context/AuthContext';

function LoginButton() {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <button onClick={toggleAuth}>
      {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>);
}

export default LoginButton;