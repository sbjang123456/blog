const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: process.env.DESTINATION_URL,
        source: '/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
