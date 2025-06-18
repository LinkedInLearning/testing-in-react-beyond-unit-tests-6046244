import { render, screen } from '@testing-library/react';
import UserProfile from '../component/UserProfile';
import { getUser } from '../api';
import { vi } from 'vitest'

vi.mock('../api', () => ({
  getUser: vi.fn(),
}));

test('renders mocked user data', async () => {
  getUser.mockResolvedValueOnce({ firstName: 'Mocked', lastName: 'User' });

  render(<UserProfile />);
  expect(screen.getByText(/loading user/i)).toBeInTheDocument();
  expect(await screen.findByText(/hello, mocked user/i)).toBeInTheDocument();
});

test('shows error message on rejected promise', async () => {
  getUser.mockRejectedValueOnce(new Error('API Error'));

  render(<UserProfile />);
  expect(await screen.findByText(/error loading user/i)).toBeInTheDocument();
});