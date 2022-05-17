/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000/", "https://raw.githubusercontent.com/PokeAPI/sprites/master"],
}
}

module.exports = nextConfig
