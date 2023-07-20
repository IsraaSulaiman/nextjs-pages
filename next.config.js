/** @type {import('next').NextConfig} */

// const dns = require("dns");

// dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", 'img.com', "api.escuelajs.co"],
  },
  // //proxy
  // async rewrites() {
  //   return [
  //     {
  //       source: "/securedapp/api/:path*",
  //       destination: "https://testing.mifteam.com/securedapp/api/:path*", // Proxy to Backend
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
