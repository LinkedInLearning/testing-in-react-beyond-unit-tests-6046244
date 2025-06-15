import { useCart } from '../context/CartContext';

function AddToCartButton() {
  const { addToCart } = useCart();

  return (
    <button onClick={addToCart}>Add to Cart</button>
  );
}

export default AddToCartButton;