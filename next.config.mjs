/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{
            allowedOrigins:["localhost:3013","https://my.algorixfinance.com"],
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
