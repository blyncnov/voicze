/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dashboardx",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/dashboard/invoicex",
        destination: "/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
