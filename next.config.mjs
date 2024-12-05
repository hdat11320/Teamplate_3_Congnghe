/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        // console.log('Rewrites applied');
        return [
            // {
            //     source: '/api/auth/:path*',
            //     destination: 'https://api-core.dsp.one/api/auth/:path*',
            // },
        ];
    },
};

export default nextConfig;
