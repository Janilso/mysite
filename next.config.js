/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

const withImages = require('next-images');

module.exports = withImages({
  ...nextConfig,
});
