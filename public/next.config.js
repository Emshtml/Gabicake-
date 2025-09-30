/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Ativa modo estrito do React (melhor debug e performance)
  reactStrictMode: true,

  // ⚡ Usa o compilador SWC para builds mais rápidos
  swcMinify: true,

  // 🖼️ Configura domínios permitidos para imagens externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'yourcdn.com', // substitua pelo seu CDN se usar um
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // se usar Cloudinary
      },
    ],
  },
};

module.exports = nextConfig;
