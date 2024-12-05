/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/old-route',  // Đường dẫn cũ
                destination: '/new-route',  // Đường dẫn mới
            },
            // Bạn có thể thêm nhiều rewrites khác ở đây
        ];
    },
};

export default nextConfig;