/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;