import { render } from '@testing-library/react';
import { TaskProvider } from './context/TaskContext';

const AllProviders = ({ children }) => {
  return <TaskProvider>{children}</TaskProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };