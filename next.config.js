/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This is required for static exports
  },
}
 
module.exports = nextConfig