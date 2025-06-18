import { render, screen } from '@testing-library/react';
import UserCard from '../components/UserCard';

test('renders username and formatted date', () => {
  
  render(<UserCard user={{ name: 'Ayo', joined: '2025-05-22' }} />);
  expect(screen.getByText(/ayo/i)).toBeInTheDocument();
  expect(screen.getByText(/joined: may/i)).toBeInTheDocument();
});