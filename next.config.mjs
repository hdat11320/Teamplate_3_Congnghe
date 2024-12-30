// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
 /**@type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Định nghĩa đường dẫn thay thế
        destination: 'https://api-core.dsp.one/api/:path*', // Đích tới của API
      },
      {
        source: '/login', // Định nghĩa đường dẫn thay thế
        destination: 'https://api-core.dsp.one/login', // Đích tới của API
      },
    ];
  },
};

export default nextConfig;