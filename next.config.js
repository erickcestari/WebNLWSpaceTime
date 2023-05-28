/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      '192.168.68.100',
      '192.168.68.104',
    ], // add your server ip to provide image
  },
}

module.exports = nextConfig
