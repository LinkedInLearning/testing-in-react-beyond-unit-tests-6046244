import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Feedback App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/feedback">Feedback</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default App;