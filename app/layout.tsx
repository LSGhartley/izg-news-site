import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Izinja Ze Game FC',
  description: 'Official news and match updates for Izinja Ze Game FC',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0d1117] text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Izinja Ze Game FC. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
