/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{
            allowedOrigins:["localhost:3013","my.algorixfinance.com"],
            allowedForwardedHosts: ['localhost']
        }
    },
    images: {

        remotePatterns: [
            {
                hostname: '*',
            },
        ],
    }
};

export default nextConfig;
