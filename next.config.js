/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Change 'nexflow' to your actual GitHub repo name
  basePath: process.env.NODE_ENV === 'production' ? '/nexflow' : '',
  images: { unoptimized: true },
}

module.exports = nextConfig
