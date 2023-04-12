/** @type {import('next').NextConfig} */

const API_KEY = "6cae8c47cd0312401fd7ff437f1ce358";

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
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
