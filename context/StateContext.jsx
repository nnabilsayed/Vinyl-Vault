import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (vinyl) => {
    const existingItem = cartItems.find((item) => item.id === vinyl.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === vinyl.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCart);
      setTotalPrice((prevTotal) => prevTotal + vinyl.price); // Update total price
    } else {
      const newCartItem = { ...vinyl, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
      setTotalPrice((prevTotal) => prevTotal + vinyl.price);
    }
  };
  const removeFromCart = (vinylId) => {
    const existingItem = cartItems.find((item) => item.id === vinylId);

    if (existingItem.quantity === 1) {
      // If the quantity is 1, remove the item from the cart
      const updatedCart = cartItems.filter((item) => item.id !== vinylId);
      setCartItems(updatedCart);
    } else {
      // Decrease the quantity by 1 if it's greater than 1
      const updatedCart = cartItems.map((item) =>
        item.id === vinylId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    }

    const removedItem = cartItems.find((item) => item.id === vinylId);
    setTotalPrice((prevTotal) => prevTotal - removedItem.price);
  };

  const contextValue = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext; // Exporting the context itself
