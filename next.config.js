/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/detail/:path*",
        destination: "/new-detail/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
