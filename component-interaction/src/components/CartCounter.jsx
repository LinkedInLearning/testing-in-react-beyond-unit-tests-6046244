import { useCart } from '../context/CartContext';

function CartCounter() {
  const { cartCount } = useCart();

  return <div>Items in cart: {cartCount}</div>;
}

export default CartCounter;