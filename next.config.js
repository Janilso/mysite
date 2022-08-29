/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
    formats: ['image/avif', 'image/webp'],
  },
};

const withImages = require('next-images');
module.exports = withImages({
  ...nextConfig,
});
