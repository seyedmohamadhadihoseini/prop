/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{
            allowedOrigins:["*"]
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
