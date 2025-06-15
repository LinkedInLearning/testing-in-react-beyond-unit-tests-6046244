import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider } from './context/CartContext';

const AllProviders = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };