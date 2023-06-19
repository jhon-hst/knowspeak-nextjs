/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'firebasestorage.googleapis.com',
            'localhost',
            'cdn.britannica.com',
            'im.indiatimes.in',
        ],
    },
}

module.exports = nextConfig
