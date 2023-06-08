/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.bazijun.top',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}

module.exports = nextConfig
