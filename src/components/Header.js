"use client"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import cab from '../asset/cab.jpg'
import { useState } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const menuLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Tour Packages', href: '#' },
    { name: 'Contact Us', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-2 md:px-12">
        {/* Logo */}
        <div className="w-[40px] h-[40px] rounded overflow-hidden bg-blue-400">
          <Image src={cab} alt="Cab Logo" className=' bg-amber-700' />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold text-red-600">
          {menuLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-red-800">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-label="Toggle menu"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <XMarkIcon className="h-6 w-6 text-red-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-red-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-red-600 font-semibold">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setToggleMenu(false)}
                  className="block hover:text-red-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
