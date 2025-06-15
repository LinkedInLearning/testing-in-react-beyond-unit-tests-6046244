import { AuthProvider } from './context/AuthContext';
import UserGreeting from './components/UserGreeting';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <AuthProvider>
      <h1>Auth Demo</h1>
      <UserGreeting />
      <LoginButton />
    </AuthProvider>
  );
}

export default App;