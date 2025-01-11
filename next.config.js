// Load environment variables from a .env file into process.env
require('dotenv').config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

module.exports = nextConfig
