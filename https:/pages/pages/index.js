import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../utils/products";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>🍰 Bem-vindo ao Gabicake</h1>
        <p>Confira nosso catálogo de bolos deliciosos:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
