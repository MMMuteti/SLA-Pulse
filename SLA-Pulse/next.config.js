/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:5500/api", // Add environment variables here
  },
};

module.exports = nextConfig;