import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Auth Context integration test', () => {
  it('displays correct greeting based on auth state', async () => {
    render(<App />);

    // Initial state: not logged in
    expect(screen.getByText(/please log in/i)).toBeInTheDocument();

    // Simulate user clicking Log In
    await userEvent.click(screen.getByRole('button', { name: /log in/i }));

    // After login: greeting should update
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  });
});