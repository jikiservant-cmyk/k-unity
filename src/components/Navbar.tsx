"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/sermons" },
  { name: "Savings", href: "/podcast" },
  { name: "Financial Advisor", href: "/scripture-finder" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-[100] sticky top-0 bg-[#0b1f3a]/95 backdrop-blur-xl border-b border-[#c9922a]/20">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-serif text-white tracking-tight">
                K-unity <span className="text-[#c9922a]">Finance SACCO</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center ml-16 space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-normal tracking-[0.02em] transition-all hover:text-white font-body",
                    pathname === link.href ? "text-[#c9922a]" : "text-white/65"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button className="bg-[#c9922a] hover:bg-[#e8b455] text-white border-none rounded-[6px] px-6 h-10 font-medium text-sm transition-all">
                Join Today
              </Button>
            </Link>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1f3a] border-t border-white/5 px-6 py-8 space-y-6 absolute top-[72px] left-0 right-0 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-xl font-serif tracking-wide text-white",
                pathname === link.href ? "text-[#c9922a]" : "opacity-60"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-[#c9922a] text-white rounded-[6px] h-14 text-lg">
              Join Today
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
