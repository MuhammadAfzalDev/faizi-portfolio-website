"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-extrabold text-gray-800">
          Muhammad<span className="text-cyan-600">Afzal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 font-bold hover:text-cyan-600 transition-colors relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-cyan-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="md:hidden bg-white py-4 px-4 shadow-md transition-transform transform origin-top animate-slide-down"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 font-bold hover:text-cyan-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
