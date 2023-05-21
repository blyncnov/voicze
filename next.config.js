/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/waitlist",
        destination: "https://forms.gle/zJxqxqw9aSpmx5SF6",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
