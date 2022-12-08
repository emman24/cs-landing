/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = withVideos(nextConfig);
