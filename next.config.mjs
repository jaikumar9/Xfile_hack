/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ // Change from domains to remotePatterns
          {
            protocol: 'https',
            hostname: 'api.microlink.io', // Microlink Image Preview
            port: '', // Leave empty for default
            pathname: '/**'// Allow all paths,
          },
        ],
      },
};

export default nextConfig;