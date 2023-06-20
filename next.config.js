/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
