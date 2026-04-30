import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // All pages fetch from Supabase at request time or via ISR.
  // Disabling static export ensures Next.js doesn't try to pre-render
  // data-fetching pages during `next build` without real env vars.
  output: 'standalone',
}

export default nextConfig
