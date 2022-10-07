/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODBURL: "mongodb+srv://macuco:qfdtFjGg6HVZVZ432@my-page.eerzzyl.mongodb.net/?retryWrites=true&w=majoriry"
  }
}

module.exports = nextConfig
