import { render } from '@testing-library/react';
import { AuthProvider } from './context/AuthContext';

const AllProviders = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };