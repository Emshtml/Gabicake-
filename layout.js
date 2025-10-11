import './globals.css'; // 👈 Adicionado no topo

export const metadata = {
  title: 'Gabicake App 🍰',
  description: 'Aplicativo Gabicake funcionando no Vercel 🚀',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{ background: '#ffcc00', padding: '1rem', textAlign: 'center' }}>
          <h1>Gabicake App 🍰</h1>
        </header>
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          {children}
        </main>
        <footer style={{ background: '#222', color: '#fff', padding: '1rem', textAlign: 'center' }}>
          © 2025 Gabicake
        </footer>
      </body>
    </html>
  );
}


