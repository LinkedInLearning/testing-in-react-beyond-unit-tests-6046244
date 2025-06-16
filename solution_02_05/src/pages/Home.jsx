import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Feedback App</h2>
      <p>Click below to give us your feedback:</p>
      <Link to="/feedback">Go to Feedback Form</Link>
    </div>
  );
};

export default Home;