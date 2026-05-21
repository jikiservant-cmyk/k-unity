'use client';

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ShieldCheck, ArrowRight, PiggyBank, Banknote, Building2, School, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { ImageReveal } from "@/components/ImageReveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const heroImages = [
  { src: "https://www.4x4uganda.com/wp-content/uploads/2023/01/Nakasero-Market-Kampala.jpg", alt: "Nakasero Market Kampala" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200", alt: "Community Growth" },
  { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200", alt: "Financial Success" },
  { src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200", alt: "Savings & Prosperity" },
  { src: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&q=80&w=1200", alt: "Business Support" }
];

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="flex flex-col w-full relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center bg-[#0b1f3a] overflow-hidden">
        {/* Full-width Slider Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Carousel setApi={setApi} opts={{ loop: true, duration: 45 }} className="w-full h-full">
            <CarouselContent className="h-full ml-0">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <div className="relative w-full h-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover brightness-[0.35]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/80 to-transparent z-[1]" />
        </div>

        <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
        
        <div className="container mx-auto relative z-10 px-6 lg:px-[6%]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#c9922a]/20 border border-[#c9922a]/50 px-4 py-1.5 rounded-full mb-8 slide-up">
              <ShieldCheck className="h-4 w-4 text-[#c9922a]" />
              <span className="text-[10px] sm:text-[11px] text-[#c9922a] font-bold tracking-[0.15em] uppercase">Regulated by UMRA · Uganda</span>
            </div>
            
            <KineticHeadline 
              lines={["K-UNITY FINANCE.", "SAVE. GROW.", "PROSPER TOGETHER."]} 
              className="text-white text-4xl sm:text-6xl lg:text-[5.5rem] font-serif font-semibold leading-[0.95] mb-8"
              staggerDelay={0.1}
            />
            
            <InkFlowText className="text-white/90 text-base md:text-xl font-body max-w-lg mb-12 font-light leading-relaxed">
              Originating from Kololo High School, K-unity Finance SACCO empowers members with transparent savings and affordable credit.
            </InkFlowText>
            
            <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: '0.4s' }}>
              <MagneticButton>
                <Link href="/contact">
                  <Button className="bg-[#c9922a] hover:bg-[#e8b455] text-white px-8 h-14 sm:h-16 rounded-[8px] text-base font-medium transition-all flex items-center gap-3">
                    Become a Member <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </MagneticButton>
              <Link href="/sermons">
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 sm:h-16 px-8 rounded-[8px] text-base font-light">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute left-[6%] bottom-10 lg:bottom-20 hidden md:flex gap-10 lg:gap-16 z-20 slide-up" style={{ animationDelay: '0.6s' }}>
          <div>
            <div className="text-3xl lg:text-4xl font-serif text-white font-semibold">12<span className="text-[#c9922a]">K+</span></div>
            <div className="text-[10px] lg:text-[12px] text-white/40 uppercase tracking-widest mt-2">Active Members</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-serif text-white font-semibold">UGX 8<span className="text-[#c9922a]">B</span></div>
            <div className="text-[10px] lg:text-[12px] text-white/40 uppercase tracking-widest mt-2">Savings Mobilized</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-serif text-white font-semibold">98<span className="text-[#c9922a]">%</span></div>
            <div className="text-[10px] lg:text-[12px] text-white/40 uppercase tracking-widest mt-2">Approval Rate</div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT STRIP */}
      <section className="py-20 lg:py-32 bg-[#faf8f3] px-6 lg:px-[6%] border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">Our Roots</span>
              <KineticHeadline 
                lines={["THE 'K' STANDS FOR", "KOLOLO HIGH SCHOOL"]} 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0b1f3a] leading-tight"
              />
              <InkFlowText className="text-[#5a6070] text-base sm:text-lg font-light leading-relaxed max-w-lg">
                K-unity Finance SACCO was born from the vision of Kololo High School founders. Today, we bridge the gap between education and financial stability for all Ugandans.
              </InkFlowText>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mt-8">
                <ImageReveal 
                  src="https://i.guim.co.uk/img/media/3a20af1c6e55372aab2693c0ee8d615b52e7343a/0_484_2000_1467/master/2000.jpg?width=620&dpr=1&s=none&crop=none" 
                  alt="Kololo Heritage" 
                  className="w-full h-full"
                  maskColor="bg-[#faf8f3]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0b1f3a] p-8 lg:p-10 rounded-[16px] text-white space-y-4">
                <TrendingUp className="h-8 w-8 text-[#c9922a]" />
                <h3 className="text-2xl font-serif">Vision</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">A financially independent community built on collective saving habits.</p>
              </div>
              <div className="bg-[#c9922a] p-8 lg:p-10 rounded-[16px] text-white space-y-4">
                <Building2 className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-serif">Mission</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">Providing affordable financial solutions rooted in integrity and cooperative values.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-20 lg:py-32 bg-white px-6 lg:px-[6%]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">Financial Solutions</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0b1f3a] mt-4 leading-tight">Services for <em className="text-[#c9922a] not-italic italic">K-unity</em></h2>
            </div>
            <p className="text-[#5a6070] font-light max-w-sm text-sm sm:text-base">From school fees financing to professional business capital, we support your growth.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <PiggyBank />, title: "Savings Accounts", desc: "Secure your future with flexible deposits and high-yield interest rates." },
              { icon: <Banknote />, title: "Personal Loans", desc: "Access quick cash for emergencies or personal development with ease." },
              { icon: <Building2 />, title: "Business Loans", desc: "Scale your trade with capital designed for Ugandan SMEs." },
              { icon: <TrendingUp />, title: "Development Loans", desc: "Invest in assets like land and machinery with long-term repayment plans." },
              { icon: <School />, title: "Education Loans", desc: "Honoring our Kololo High School roots by funding your children's future." },
              { icon: <Users />, title: "Share Capital", desc: "Become a co-owner of K-unity and earn annual dividends." }
            ].map((s, i) => (
              <div key={i} className="group bg-[#faf8f3] border border-[#e8e4d8] p-8 lg:p-10 rounded-[16px] transition-all hover:border-[#c9922a] hover:-translate-y-1 hover:shadow-xl cursor-pointer">
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
      <section className="py-20 lg:py-32 bg-[#0b1f3a] text-white px-6 lg:px-[6%]">
        <div className="container mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9922a]">Getting Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mt-4 leading-tight">Join K-unity in <em className="text-[#c9922a] not-italic">four</em> steps</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {[
              { num: "01", title: "Apply Online", desc: "Register through our portal or visit our Kampala office." },
              { num: "02", title: "Join & Shares", desc: "Pay a one-time fee and buy shares to become a full member." },
              { num: "03", title: "Save Monthly", desc: "Build your credit history through consistent monthly savings." },
              { num: "04", title: "Access Credit", desc: "Get loans up to 3x your savings after just 3 months of joining." }
            ].map((step, i) => (
              <div key={i} className="p-8 lg:p-10 border-b sm:border-r last:border-b-0 last:border-r-0 border-white/10 relative group">
                <div className="text-5xl lg:text-6xl font-serif font-bold text-[#c9922a]/10 mb-6 group-hover:text-[#c9922a]/20 transition-colors leading-none">{step.num}</div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-20 lg:py-32 bg-[#c9922a] text-white px-6 lg:px-[6%]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight">Ready to build your<br className="hidden sm:block"/>wealth with K-unity?</h2>
            <p className="text-white/70 text-base sm:text-lg font-light mt-4">Join the legacy of Kololo High School financial excellence.</p>
          </div>
          <MagneticButton className="w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-[#c9922a] hover:shadow-2xl hover:-translate-y-1 h-16 sm:h-20 px-8 sm:px-12 rounded-[8px] text-lg sm:text-xl font-bold transition-all whitespace-nowrap">
                Join K-unity Today →
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
