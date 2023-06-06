/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        domains: ['firebasestorage.googleapis.com'],
    },
}

module.exports = nextConfig
