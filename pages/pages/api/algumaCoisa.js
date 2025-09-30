// pages/AlgumaCoisa.js
import React from 'react';
import Image from 'next/image';

// Exemplo de lista de produtos
const produtos = [
  {
    id: 1,
    nome: 'Bolo de Chocolate',
    descricao: 'Delicioso bolo de chocolate com cobertura cremosa.',
    preco: 'R$ 45,00',
    imagem: '/produtos/bolo-chocolate.jpg', // coloque suas imagens na pasta public/produtos
  },
  {
    id: 2,
    nome: 'Cupcake Morango',
    descricao: 'Macio e doce cupcake com morangos frescos.',
    preco: 'R$ 12,00',
    imagem: '/produtos/cupcake-morango.jpg',
  },
  {
    id: 3,
    nome: 'Torta de Limão',
    descricao: 'Torta cítrica com massa crocante e recheio cremoso.',
    preco: 'R$ 38,00',
    imagem: '/produtos/torta-limao.jpg',
  },
];

export default function AlgumaCoisa() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Produtos Gabicake 🍰</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={250}
              height={250}
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
            <h2 style={{ marginTop: '1rem' }}>{produto.nome}</h2>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{produto.descricao}</p>
            <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

