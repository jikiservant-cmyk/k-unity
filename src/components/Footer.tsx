import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Landmark } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2D2B44] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:text-[#FFB800] transition-colors">
                NCF<br />SACCO
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-body text-lg">
              Empowering the Nabweru community through cooperative financial services since 2005.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-[#FFB800] transition-all hover:scale-110"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">Our Services</h3>
            <ul className="space-y-4 text-lg font-bold">
              <li><Link href="/about" className="hover:text-[#FFB800] transition-colors">About SACCO</Link></li>
              <li><Link href="/sermons" className="hover:text-[#FFB800] transition-colors">Loan Products</Link></li>
              <li><Link href="/podcast" className="hover:text-[#FFB800] transition-colors">Savings Plans</Link></li>
              <li><Link href="/donate" className="hover:text-[#FFB800] transition-colors">Online Loan Application</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">Working Hours</h3>
            <ul className="space-y-4 text-white/60 font-body text-lg">
              <li>Mon - Fri: 8:30 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-4 text-[#FFB800] font-bold">Member Meetings</li>
              <li>Last Sat of Month: 10:00 AM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 uppercase text-[#FFB800] tracking-widest">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FFB800] mt-1 shrink-0" />
                <span className="text-white/60 text-lg">Nabweru Community SACCO, 9GGV+56F, Nabweru Rd, Kampala</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#FFB800] shrink-0" />
                <span className="text-white/60 text-lg">(+256) 7XX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#FFB800] shrink-0" />
                <span className="text-white/60 text-lg">info@ncf-sacco.co.ug</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center text-sm text-white/30 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Nabweru Community SACCO. Registered Cooperative.</p>
        </div>
      </div>
    </footer>
  )
}
