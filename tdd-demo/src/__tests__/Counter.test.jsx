import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('it displays 0 and increments on click', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});