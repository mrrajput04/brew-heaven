"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#2C1810]/95 text-white backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Brew Haven
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#reservation">Reservation</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#2C1810] md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="#menu" onClick={() => setIsMenuOpen(false)}>
                Menu
              </MobileNavLink>
              <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </MobileNavLink>
              <MobileNavLink href="#reservation" onClick={() => setIsMenuOpen(false)}>
                Reservation
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium hover:text-amber-300 transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="block py-2 font-medium hover:text-amber-300 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}
