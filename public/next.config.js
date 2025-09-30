/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'yourcdn.com'], // para imagens externas se houver
  },
};

module.exports = nextConfig;
