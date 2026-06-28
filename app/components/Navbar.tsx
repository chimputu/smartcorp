'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Fixed navbar */}
      <div className='bg-blue-500'>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl h-20 bg-gray-100 rounded-3xl shadow-sm">
        <div className="flex flex-row justify-between items-center h-full px-6">
          
          {/* Logo */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
  <Image
    src="/smart.png"
    height={40}
    width={40}
    alt="SmartCorp logo"
    className="object-cover w-full h-full"
    priority
  />
</div>
            <h1 className="text-2xl text-blue-700 font-semibold">
              SmartCorp
            </h1>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === href
                      ? 'text-white bg-blue-500'
                      : 'text-gray-600 hover:text-white hover:bg-blue-400'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gray-100 rounded-2xl shadow-lg p-4 space-y-2"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-white bg-blue-500'
                    : 'text-gray-600 hover:text-white hover:bg-blue-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      </div>

      {/* Spacer */}
      <div className="h-28" />
    </>
  )
}