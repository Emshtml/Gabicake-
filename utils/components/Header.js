import Link from "next/link";

export default function Header({ cartCount }) {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <h1>🍰 Gabicake</h1>
      <nav>
        <Link href="/">Home</Link> | <Link href="/cart">Carrinho ({cartCount})</Link>
      </nav>
    </header>
  );
}
export default function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "50px", padding: "20px", borderTop: "1px solid #ccc" }}>
      <p>© 2025 Gabicake. Todos os direitos reservados.</p>
    </footer>
  );
}
export default function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button onClick={() => onAdd(product)} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
