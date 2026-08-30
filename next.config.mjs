/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.31.69'],
};

export default nextConfig;
