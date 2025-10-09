/ pages/index.js

export default function Home() {
  const produtos = [
    { id: 1, nome: "Cupcake de Baunilha", preco: "R$ 9,90", imagem: "https://picsum.photos/300/200?random=1" },
    { id: 2, nome: "Bolo Red Velvet", preco: "R$ 39,90", imagem: "https://picsum.photos/300/200?random=2" },
    { id: 3, nome: "Brownie Tradicional", preco: "R$ 7,50", imagem: "https://picsum.photos/300/200?random=3" },
    { id: 4, nome: "Torta de Limão", preco: "R$ 29,90", imagem: "https://picsum.photos/300/200?random=4" },
    { id: 5, nome: "Mini Naked Cake", preco: "R$ 24,90", imagem: "https://picsum.photos/300/200?random=5" },
    { id: 6, nome: "Cupcake de Chocolate", preco: "R$ 9,90", imagem: "https://picsum.photos/300/200?random=6" },
    { id: 7, nome: "Cheesecake Frutas Vermelhas", preco: "R$ 34,90", imagem: "https://picsum.photos/300/200?random=7" },
    { id: 8, nome: "Bolo de Cenoura com Chocolate", preco: "R$ 19,90", imagem: "https://picsum.photos/300/200?random=8" },
    { id: 9, nome: "Torta de Morango", preco: "R$ 27,90", imagem: "https://picsum.photos/300/200?random=9" },
    { id: 10, nome: "Mini Brownie Gourmet", preco: "R$ 5,90", imagem: "https://picsum.photos/300/200?random=10" },
    { id: 11, nome: "Cupcake Especial", preco: "R$ 11,90", imagem: "https://picsum.photos/300/200?random=11" },
    { id: 12, nome: "Bolo de Aniversário", preco: "R$ 59,90", imagem: "https://picsum.photos/300/200?random=12" },
  ];

  const adicionarAoCarrinho = (produto) => {
    alert(`${produto.nome} foi adicionado ao carrinho 🛒`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>🍰 Bem-vindo ao Gabicake!</h1>
      <p style={styles.subtitulo}>Escolha suas delícias abaixo e adicione ao carrinho ✨</p>

      <div style={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} style={styles.card}>
            <img src={produto.imagem} alt={produto.nome} style={styles.imagem} />
            <h2 style={styles.nome}>{produto.nome}</h2>
            <p style={styles.preco}>{produto.preco}</p>
            <button style={styles.botao} onClick={() => adicionarAoCarrinho(produto)}>
              🛒 Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    background: '#faf9fb',
    minHeight: '100vh',
  },
  titulo: {
    fontSize: '2.8rem',
    marginBottom: '10px',
    color: '#3e2a47',
  },
  subtitulo: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#6a4c7d',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
    padding: '20px',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  imagem: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginBottom: '15px',
  },
  nome: {
    fontSize: '1.4rem',
    marginBottom: '8px',
    color: '#3e2a47',
  },
  preco: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    color: '#8e6ba3',
    fontWeight: 'bold',
  },
  botao: {
    background: '#8e44ad',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.2s',
  },
};

styles.card[':hover'] = {
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
};

styles.botao[':hover'] = {
  background: '#732d91',
};
