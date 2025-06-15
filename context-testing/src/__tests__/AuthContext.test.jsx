import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Auth Context integration test', () => {
  it('displays correct greeting and button label based on auth state', async () => {
    render(<App />);

    // Initial state: not logged in
    expect(screen.getByText(/please log in/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();

    // Simulate user clicking Log In
    await userEvent.click(screen.getByRole('button', { name: /log in/i }));

    // After login
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();

    // Simulate clicking Log Out
    await userEvent.click(screen.getByRole('button', { name: /log out/i }));

    // Back to initial state
    expect(screen.getByText(/please log in/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });
});