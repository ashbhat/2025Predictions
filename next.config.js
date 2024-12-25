/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    console.log('CSS Module rules:', config.module.rules.filter(rule => rule.test && rule.test.toString().includes('css')));
    return config;
  }
}

module.exports = nextConfig
