/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p1.music.126.net',
        pathname: '/**',
      },
    ],
  },
  // experimental: { appDir: true },
}

module.exports = nextConfig
