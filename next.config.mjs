/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Fix issues when using Node.js modules in Next.js
    return config;
  },
};

export default nextConfig;
