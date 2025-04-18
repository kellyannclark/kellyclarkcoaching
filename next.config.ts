/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This skips ESLint errors during Vercel build
  },
};

module.exports = nextConfig;
