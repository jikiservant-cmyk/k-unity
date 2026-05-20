import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#060f1e] text-white/50 pt-24 pb-12 px-6 lg:px-[6%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-serif text-white tracking-tight">
                Nabweru <span className="text-[#c9922a]">SACCO</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-body font-light max-w-xs">
              Empowering communities across Uganda through transparent, accessible and inclusive financial services since 2005.
            </p>
            <p className="text-[11px] text-white/30 uppercase tracking-widest font-bold">
              Licensed by UMRA · Reg. No. UMRA/DT/0124
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/podcast" className="hover:text-[#c9922a] transition-colors">Savings Accounts</Link></li>
              <li><Link href="/sermons" className="hover:text-[#c9922a] transition-colors">Personal Loans</Link></li>
              <li><Link href="/sermons" className="hover:text-[#c9922a] transition-colors">Business Loans</Link></li>
              <li><Link href="/sermons" className="hover:text-[#c9922a] transition-colors">School Fees Loan</Link></li>
              <li><Link href="/sermons" className="hover:text-[#c9922a] transition-colors">Share Capital</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/about" className="hover:text-[#c9922a] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9922a] transition-colors">Visit Our Office</Link></li>
              <li><Link href="/scripture-finder" className="hover:text-[#c9922a] transition-colors">Financial Advisor</Link></li>
              <li><Link href="/donate" className="hover:text-[#c9922a] transition-colors">Apply Online</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-8">Contact</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#c9922a] mt-1 shrink-0" />
                <span>Nabweru Christian Fellowship Church, 9GGV+56F, Nabweru Rd, Kampala</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#c9922a] shrink-0" />
                <span>(+256) 7XX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#c9922a] shrink-0" />
                <span>info@ncf-sacco.co.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-light">© {new Date().getFullYear()} Nabweru Community SACCO. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/20 hover:text-[#c9922a] transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-white/20 hover:text-[#c9922a] transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-white/20 hover:text-[#c9922a] transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-white/20 hover:text-[#c9922a] transition-colors"><Youtube className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}