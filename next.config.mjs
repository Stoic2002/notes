/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, 'prisma', '@prisma/client']
    }
    return config
  },
};

export default nextConfig;