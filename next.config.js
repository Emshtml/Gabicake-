/** @type /** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Ativa modo estrito do React para melhor performance e debug
  reactStrictMode: true,

  // ⚡ Otimiza build usando SWC (compilador ultra rápido)
  swcMinify: true,

  // 📸 Permite imagens externas e otimização automática
  images: {
    domains: [
      "images.unsplash.com",
      "tse2.mm.bing.net",
      "tse3.mm.bing.net",
      "via.placeholder.com",
      "res.cloudinary.com",
      "cdn.pixabay.com",
    ],
    formats: ["image/avif", "image/webp"],
  },

  // 🔗 Adiciona barra final às URLs para SEO
  trailingSlash: true,

  // 🧠 Ativa compressão de arquivos no servidor para performance
  compress: true,

  // 📱 Permite transformar em PWA futuramente (com next-pwa ou similar)
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ["@mui/material", "react-icons"],
  },

  // ⚙️ Redirecionamentos ou rewrites (caso precise no futuro)
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/painel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
