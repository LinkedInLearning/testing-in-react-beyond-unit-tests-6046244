import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from '../components/Dashboard';

describe('Dashboard component interaction test', () => {
  it('should open and close UserProfile modal when user interacts', async () => {
    render(<Dashboard />);

    // Initial state: modal not present
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Simulate click on "View Profile"
    await userEvent.click(screen.getByRole('button', { name: /view profile/i }));

    // After click: modal present
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/user profile/i)).toBeInTheDocument();

    // Close the modal
    await userEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});