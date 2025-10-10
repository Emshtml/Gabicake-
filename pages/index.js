import { useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const produtos = [
    { id: 1, nome: "Cupcake de Baunilha", preco: "R$ 9,90", imagem: "https://picsum.photos/300/200?random=1" },
    { id: 2, nome: "Bolo Red Velvet", preco: "R$ 39,90", imagem: "https://picsum.photos/300/200?random=2" },
    { id: 3, nome: "Brownie Tradicional", preco: "R$ 7,50", imagem: "https://picsum.photos/300/200?random=3" },
    { id: 4, nome: "Torta de Limão", preco: "R$ 29,90", imagem: "https://picsum.photos/300/200?random=4" },
    { id: 5, nome: "Mini Naked Cake", preco: "R$ 24,90", imagem: "https://picsum.photos/300/200?random=5" },
    { id: 6, nome: "Cupcake de Chocolate", preco: "R$ 9,90", imagem: "https://picsum.photos/300/200?random=6" },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    alert(`${produto.nome} foi adicionado ao carrinho 🛒`);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      {/* TOPO */}
      <header style={styles.header}>
        <h1 style={styles.titulo}>🍰 Gabicake</h1>
        <button
          style={styles.carrinhoBotao}
          onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
        >
          🛒 {carrinho.length} itens
        </button>
      </header>

      <p style={styles.subtitulo}>Escolha suas delícias e adicione ao carrinho ✨</p>

      {/* LISTA DE PRODUTOS */}
      <div style={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} style={styles.card}>
            <img src={produto.imagem} alt={produto.nome} style={styles.imagem} />
            <h2 style={styles.nome}>{produto.nome}</h2>
            <p style={styles.preco}>{produto.preco}</p>
            <button style={styles.botao} onClick={() => adicionarAoCarrinho(produto)}>
              🛒 Adicionar
            </button>
          </div>
        ))}
      </div>

      {/* CARRINHO */}
      {mostrarCarrinho && (
        <div style={styles.carrinhoBox}>
          <h3>🧺 Itens no carrinho:</h3>
          {carrinho.length === 0 ? (
            <p>Nenhum item adicionado ainda.</p>
          ) : (
            <ul style={styles.lista}>
              {carrinho.map((item) => (
                <li key={item.id} style={styles.item}>
                  <span>{item.nome}</span>
                  <button style={styles.remover} onClick={() => removerDoCarrinho(item.id)}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    background: "#faf9fb",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  titulo: {
    fontSize: "2rem",
    color: "#3e2a47",
  },
  carrinhoBotao: {
    background: "#8e44ad",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 15px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  subtitulo: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#6a4c7d",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "15px",
  },
  imagem: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  nome: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#3e2a47",
  },
  preco: {
    fontSize: "1rem",
    color: "#8e6ba3",
  },
  botao: {
    background: "#8e44ad",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    marginTop: "8px",
    cursor: "pointer",
  },
  carrinhoBox: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "15px",
    marginTop: "30px",
  },
  lista: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    padding: "5px 0",
  },
  remover: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
};

