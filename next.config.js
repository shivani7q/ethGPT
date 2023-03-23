/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    LARGE_INPUT_CONTENT: process.env.LARGE_INPUT_CONTENT,
  },
};


module.exports = nextConfig
