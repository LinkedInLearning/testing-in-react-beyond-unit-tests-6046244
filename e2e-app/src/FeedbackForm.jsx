import { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input data-test="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input data-test="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Message:</label>
        <textarea data-test="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button data-test="submit" type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;