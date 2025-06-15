import { useAuth } from '../context/AuthContext';

function LoginButton() {
  const { login } = useAuth();

  return <button onClick={login}>Log In</button>;
}

export default LoginButton;