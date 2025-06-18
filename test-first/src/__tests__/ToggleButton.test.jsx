import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';

test('renders with OFF and toggles to ON when clicked', () => {
  render(<ToggleButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent(/off/i);

  fireEvent.click(button);
  expect(button).toHaveTextContent(/on/i);
});