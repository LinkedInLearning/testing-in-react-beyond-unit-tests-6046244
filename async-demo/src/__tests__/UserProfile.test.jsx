import { render, screen } from '@testing-library/react';
import UserProfile from '../component/UserProfile';
import { http } from 'msw';
import { server } from '../mocks/server';

test('renders loading state initially', () => {
  render(<UserProfile />);
  expect(screen.getByText(/loading user/i)).toBeInTheDocument();
});

test('renders user data after fetch', async () => {
  render(<UserProfile />);
  expect(await screen.findByText(/hello, john doe/i)).toBeInTheDocument();
});

test('renders error message on API failure', async () => {
  server.use(
    http.get('https://api.example.com/user', (_, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<UserProfile />);
  expect(await screen.findByText(/error loading user/i)).toBeInTheDocument();
});