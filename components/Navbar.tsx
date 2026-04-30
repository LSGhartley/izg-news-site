'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/lineup', label: 'Lineup' },
  { href: '/fixtures', label: 'Fixtures' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#1a5c2a] border-b-4 border-[#f5c518]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f5c518] flex items-center justify-center font-black text-[#1a5c2a] text-sm">
            IZG
          </div>
          <span className="font-bold text-white text-lg hidden sm:block">Izinja Ze Game FC</span>
        </Link>

        <ul className="flex gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-[#f5c518] text-[#1a5c2a]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
