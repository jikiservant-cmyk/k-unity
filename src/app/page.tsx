'use client';

import React from "react"
import Link from "next/link"
import { ShieldCheck, ArrowRight, PiggyBank, Banknote, Building2, School, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { BlurFocusText } from "@/components/BlurFocusText"

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center bg-[#0b1f3a] overflow-hidden px-6 lg:px-[6%]">
        <div className="absolute inset-0 bg-grid-lines opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(201,146,42,0.1),transparent_55%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#c9922a]/10 border border-[#c9922a]/30 px-4 py-1.5 rounded-full mb-8 slide-up">
              <ShieldCheck className="h-4 w-4 text-[#c9922a]" />
              <span className="text-[11px] text-[#c9922a] font-bold tracking-[0.15em] uppercase">Regulated by UMRA · Uganda</span>
            </div>
            
            <KineticHeadline 
              lines={["SAVE TOGETHER.", "GROW TOGETHER.", "PROSPER."]} 
              className="text-white text-5xl sm:text-7xl lg:text-[5.5rem] font-serif font-semibold leading-[0.95] mb-8"
              staggerDelay={0.1}
            />
            
            <InkFlowText className="text-white/60 text-lg md:text-xl font-body max-w-lg mb-12 font-light leading-relaxed">
              Nabweru Community SACCO empowers members with transparent savings, affordable loans, and financial education built on trust.
            </InkFlowText>
            
            <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <MagneticButton>
                <Link href="/contact">
                  <Button className="bg-[#c9922a] hover:bg-[#e8b455] text-white px-8 h-16 rounded-[8px] text-base font-medium transition-all flex items-center gap-3">
                    Become a Member <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </MagneticButton>
              <Link href="/sermons">
                <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/5 h-16 px-8 rounded-[8px] text-base font-light">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section Overlay */}
        <div className="absolute right-[6%] bottom-20 hidden lg:flex gap-16 slide-up" style={{ animationDelay: '0.6s' }}>
          <div>
            <div className="text-4xl font-serif text-white font-semibold">5<span className="text-[#c9922a]">K+</span></div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest mt-2">Active Members</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-white font-semibold">UGX 2<span className="text-[#c9922a]">B</span></div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest mt-2">Savings Mobilized</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-white font-semibold">98<span className="text-[#c9922a]">%</span></div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest mt-2">Approval Rate</div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT STRIP */}
      <section className="py-24 bg-[#f0ece2] px-6 lg:px-[6%]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">Who we are</span>
              <KineticHeadline 
                lines={["BUILT ON TRUST,", "DRIVEN BY COMMUNITY"]} 
                className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1f3a] leading-tight"
              />
              <InkFlowText className="text-[#5a6070] text-lg font-light leading-relaxed max-w-lg">
                Founded in 2005, Nabweru Community SACCO has been transforming lives. We believe every member deserves a fair shot at financial freedom through collective strength.
              </InkFlowText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0b1f3a] p-10 rounded-[16px] text-white space-y-4">
                <TrendingUp className="h-8 w-8 text-[#c9922a]" />
                <h3 className="text-2xl font-serif">Our Vision</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">A financially empowered community achieving dreams through collective effort.</p>
              </div>
              <div className="bg-[#c9922a] p-10 rounded-[16px] text-white space-y-4">
                <Building2 className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-serif">Our Mission</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">To provide accessible, transparent and affordable financial services across Uganda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 bg-white px-6 lg:px-[6%]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">What we offer</span>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1f3a] mt-4">Services built for <em className="text-[#c9922a] not-italic italic">real needs</em></h2>
            </div>
            <p className="text-[#5a6070] font-light max-w-sm">From daily savings to long-term business credit, we have the tools you need to move forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <PiggyBank />, title: "Savings Accounts", desc: "Earn competitive interest on your deposits with flexible access." },
              { icon: <Banknote />, title: "Personal Loans", desc: "Quick financing with terms tailored to your specific monthly income." },
              { icon: <Building2 />, title: "Business Loans", desc: "Scale your SME with funding from UGX 1,000,000 to 50,000,000." },
              { icon: <TrendingUp />, title: "Development Loans", desc: "Long-term packages for home improvement and land acquisition." },
              { icon: <School />, title: "School Fees Loans", desc: "Fast-disbursed education financing to ensure your children stay in school." },
              { icon: <Users />, title: "Share Capital", desc: "Own a piece of the SACCO and earn dividends on your investment." }
            ].map((s, i) => (
              <div key={i} className="group bg-[#faf8f3] border border-[#e8e4d8] p-10 rounded-[16px] transition-all hover:border-[#c9922a] hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <div className="bg-[#0b1f3a] h-14 w-14 rounded-[12px] flex items-center justify-center text-[#c9922a] mb-6 group-hover:bg-[#c9922a] group-hover:text-white transition-colors">
                  {React.cloneElement(s.icon as React.ReactElement, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-medium text-[#0b1f3a] mb-3">{s.title}</h3>
                <p className="text-[#5a6070] text-sm font-light leading-relaxed mb-6">{s.desc}</p>
                <div className="text-[#c9922a] transform transition-transform group-hover:translate-x-2">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-[#0b1f3a] text-white px-6 lg:px-[6%]">
        <div className="container mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">Getting Started</span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-4">Join in <em className="text-[#c9922a] not-italic">four</em> simple steps</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {[
              { num: "01", title: "Register Online", desc: "Fill out our simple form or visit our branch in Nabweru." },
              { num: "02", title: "Join & Share", desc: "Pay a one-time fee of UGX 20,000 and buy your initial shares." },
              { num: "03", title: "Start Saving", desc: "Make your first deposit. Monthly contributions start at UGX 30,000." },
              { num: "04", title: "Access Credit", desc: "After 3 months of saving, qualify for loans up to 3x your balance." }
            ].map((step, i) => (
              <div key={i} className="p-10 border-r border-white/10 last:border-r-0 relative group">
                <div className="text-6xl font-serif font-bold text-[#c9922a]/10 mb-6 group-hover:text-[#c9922a]/20 transition-colors leading-none">{step.num}</div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-24 bg-[#c9922a] text-white px-6 lg:px-[6%]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">Ready to start your<br/>financial journey?</h2>
            <p className="text-white/70 text-lg font-light mt-4">Join over 5,000 members growing with Nabweru SACCO.</p>
          </div>
          <MagneticButton>
            <Button className="bg-white text-[#c9922a] hover:shadow-2xl hover:-translate-y-1 h-20 px-12 rounded-[8px] text-xl font-bold transition-all whitespace-nowrap">
              Open an Account Today →
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
