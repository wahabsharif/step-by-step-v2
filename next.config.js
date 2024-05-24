/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
