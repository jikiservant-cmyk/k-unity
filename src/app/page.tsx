'use client';

import Link from "next/link"
import { MessageSquare, ChevronDown, ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

export default function Home() {
  const heroImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920&h=1080"
  const visionImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600"

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-[#003322]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.35]"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-white text-center w-full max-w-6xl">
            <KineticHeadline 
              lines={["NABWERU COMMUNITY"]} 
              className="text-sm md:text-xl font-black uppercase tracking-[0.4em] mb-8 md:mb-12 font-headline text-[#FFB800]"
              staggerDelay={0}
            />
            
            <KineticHeadline 
              lines={["SECURE YOUR", "FUTURE"]} 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] font-headline"
              staggerDelay={0.1}
            />
            
            <div className="w-16 md:w-24 h-2 md:h-3 bg-[#FFB800] mt-10 md:mt-12 mb-6 md:mb-8" />
            
            <p className="text-lg md:text-2xl font-body max-w-2xl mb-12 opacity-90 px-4">
              Empowering Nabweru through sustainable cooperative savings and affordable financial growth.
            </p>
            
            <ChevronDown className="h-8 md:h-10 w-8 md:w-10 animate-bounce opacity-40 text-[#FFB800]" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <MagneticButton strength={15}>
          <Link href="/scripture-finder">
            <button className="bg-[#FFB800] text-[#003322] flex items-center space-x-3 px-6 md:px-8 py-4 md:py-5 rounded-full shadow-[0_20px_50px_rgba(255,184,0,0.3)] hover:scale-105 active:scale-95 transition-all group">
              <MessageSquare className="h-5 md:h-6 w-5 md:w-6" />
              <span className="font-black uppercase tracking-wider text-sm md:text-base">Advisor Chat</span>
            </button>
          </Link>
        </MagneticButton>
      </div>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            <KineticHeadline 
              lines={["FINANCIAL FREEDOM", "THROUGH UNITY"]}
              className="text-[#003322] text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-8 uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg md:text-2xl mb-10 leading-relaxed font-body font-medium">
              Join over 5,000 members building wealth together. 
              We are a registered cooperative dedicated to transparent, 
              member-owned financial progress in Nabweru.
            </InkFlowText>
            <div className="h-1.5 w-24 bg-[#FFB800] mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-32 bg-[#003322] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 lg:order-1 px-4 md:px-0">
              <ImageReveal 
                src={visionImg}
                alt="SACCO Community"
                className="rounded-2xl shadow-2xl aspect-[4/3] w-full"
                maskColor="bg-[#FFB800]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 md:space-y-10 text-white text-center lg:text-left">
              <span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-xs md:text-sm block">Member Owned</span>
              <KineticHeadline 
                lines={["COOPERATING", "FOR WEALTH"]}
                className="text-4xl md:text-7xl lg:text-8xl font-black uppercase font-headline leading-[0.85]"
              />
              <InkFlowText className="text-white/80 text-base md:text-xl font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our cooperative model ensures profits return to you. We offer 
                competitive dividends, low interest rates, and financial training 
                for every member.
              </InkFlowText>
              <div className="pt-6">
                <MagneticButton>
                  <Link href="/sermons">
                    <Button className="bg-[#FFB800] hover:bg-white text-[#003322] font-black h-16 md:h-20 px-10 md:px-14 rounded-full text-lg md:text-xl group transition-all duration-300">
                      EXPLORE PRODUCTS
                      <ArrowRight className="ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-[#F8F9FA] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <ShieldCheck className="h-12 w-12 text-[#FFB800]" />,
                title: "Safe Savings",
                desc: "Multiple tiers of saving plans with high annual dividends and secure vault management.",
                link: "/podcast",
                label: "Savings Plans"
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-[#FFB800]" />,
                title: "Fair Credit",
                desc: "Quick, affordable loans for business, education, and development with flexible terms.",
                link: "/sermons",
                label: "Loan Products"
              },
              {
                icon: <Users className="h-12 w-12 text-[#FFB800]" />,
                title: "Expert Advice",
                desc: "Talk to our AI Financial Advisor for instant guidance on wealth creation and saving.",
                link: "/scripture-finder",
                label: "Get Advice"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-b-8 border-[#FFB800] group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black text-[#003322] mb-4 uppercase font-headline">{item.title}</h3>
                <p className="text-muted-foreground mb-10 font-body text-base md:text-lg leading-relaxed">{item.desc}</p>
                <Link href={item.link} className="inline-flex items-center text-[#003322] font-black text-xs md:text-sm tracking-widest uppercase group-hover:text-[#FFB800] transition-colors">
                  {item.label} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
