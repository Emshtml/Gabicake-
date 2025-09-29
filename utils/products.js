export const products = [
  { id: 1, name: "Bolo de Chocolate", price: 45, image: "/images/bolo-chocolate.jpg" },
  { id: 2, name: "Bolo de Morango", price: 50, image: "/images/bolo-morango.jpg" },
  { id: 3, name: "Bolo de Cenoura", price: 40, image: "/images/bolo-cenoura.jpg" }
];
export const addToCart = (cart, product) => {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    return cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
};

export const removeFromCart = (cart, productId) =>
  cart.filter(item => item.id !== productId);

export const updateQuantity = (cart, productId, quantity) =>
  cart.map(item =>
    item.id === productId ? { ...item, quantity } : item
  );

export const getTotal = cart =>
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
