/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // disable Image Optimization to avoid sharp dependency in production build
  },
}

module.exports = nextConfig
