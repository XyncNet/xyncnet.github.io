/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.OUTPUT,
  // distDir: 'dist',
  images: {
    // dangerouslyAllowSVG: true,
    // unoptimized: true
  }
}

module.exports = nextConfig
