/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "res.cloudinary.com", "cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
