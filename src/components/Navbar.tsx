"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About SACCO", href: "/about" },
  { name: "Our Products", href: "/sermons" },
  { name: "Savings Plans", href: "/podcast" },
  { name: "Apply for Loan", href: "/donate" },
  { name: "Financial Advisor", href: "/scripture-finder" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50 sticky top-0 bg-[#3E3E4E] shadow-lg">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-12 group">
              <span className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
                NCF<br /><span className="text-[#FFB800]">SACCO</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.2em] transition-all hover:text-[#FFB800] font-headline text-white whitespace-nowrap",
                    pathname === link.href ? "text-[#FFB800]" : "opacity-80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-white hover:text-[#FFB800] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden ml-4 p-2 text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#3E3E4E] border-t border-white/5 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-xl font-medium uppercase tracking-widest text-white font-headline",
                pathname === link.href ? "text-[#FFB800]" : "opacity-60"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
