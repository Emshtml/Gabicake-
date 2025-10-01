import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCart, getCartTotal } from "../utils/cart";

export default function Cart() {
  const cartItems = getCart();
  const total = getCartTotal();

  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>🛒 Seu Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
      </main>
      <Footer />
    </>
  );
}
