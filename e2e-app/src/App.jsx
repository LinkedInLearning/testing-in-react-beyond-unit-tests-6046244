import { useState } from 'react';
import FeedbackForm from './FeedbackForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      {!showForm && !submitted && (
        <>
          <h1>Thank you for purchasing an item from us today!</h1>
          <button data-test="leave-feedback" onClick={() => setShowForm(true)}>
            Leave Feedback
          </button>
        </>
      )}

      {showForm && !submitted && (
        <FeedbackForm onSubmit={() => setSubmitted(true)} />
      )}

      {submitted && (
        <div>
          <h2>Thank you for your feedbck!</h2>
        </div>
      )}
    </div>
  );
}

export default App;