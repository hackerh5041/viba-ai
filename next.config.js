/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vibaai.video', 'localhost'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
