/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {}, // Set as an object
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
