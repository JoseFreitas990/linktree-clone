/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'media.licdn.com',
      'github.githubassets.com',
      'www.linkedin.com',
      'cdn-icons-png.flaticon.com',
      't4.ftcdn.net',
      'drive.google.com',
    ],
  },
};

module.exports = nextConfig;
