/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mdbootstrap.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/*",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://mdbootstrap.com/img/Photos/Avatars/
