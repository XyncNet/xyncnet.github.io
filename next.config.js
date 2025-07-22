/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.OUTPUT,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
  // trailingSlash: true,
  // distDir: 'dist',
  images: {
    // dangerouslyAllowSVG: true,
    // unoptimized: true
  }
}

module.exports = nextConfig
