export const incrementItemQuantity = (itemToIncrement, cartItems) => {
  return cartItems.map((i) =>
    i.id === itemToIncrement.id
      ? { ...itemToIncrement, quantity: itemToIncrement.quantity + 1 }
      : i
  );
};

export const decrementItemQuantity = (itemToDecrement, cartItems) => {
  return itemToDecrement.quantity === 1
    ? cartItems.filter((i) => i.id !== itemToDecrement.id)
    : cartItems.map((i) =>
        i.id === itemToDecrement.id
          ? { ...itemToDecrement, quantity: itemToDecrement.quantity - 1 }
          : i
      );
};
