/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations - remove ignoring for better quality
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  // Optimize images for better performance
  images: {
    domains: ['juche.org', 'localhost'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/briefings/north-korea-deception',
        destination: '/briefings/dprk-narrative',
        permanent: true,
      },
    ]
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig