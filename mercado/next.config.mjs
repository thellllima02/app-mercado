/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*", // Quando Next.js receber uma requisição para "/api/..."
          destination: "http://localhost:3030/api/:path*", // Redireciona para sua API no Docker
        },
      ];
    },
  };
  
  export default nextConfig;
  