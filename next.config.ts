/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips ESLint errors during Vercel build
  },
};

module.exports = nextConfig;
