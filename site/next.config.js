/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'jortizbinarysoul',
    description: 'Test registry for Kasm supported workspaces.',
    icon: 'https://th.bing.com/th/id/OIP.hWJ7MU4gP7ZyMfHPIs-eVwHaHa?w=153&h=180&c=7&r=0&o=5&pid=1.7',
    listUrl: 'https://jortizbinarysoul.github.io/kasm-registry/',
    contactUrl: 'https://github.com/jortizbinarysoul/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
