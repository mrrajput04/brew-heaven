import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Brew Haven</h3>
            <p className="text-gray-300 mb-4">Where every cup tells a story and every moment becomes a memory.</p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates, promotions, and coffee tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      className="bg-white/10 hover:bg-amber-600 p-2 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
