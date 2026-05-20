'use client';

import Link from "next/link"
import { MessageSquare, ChevronDown, ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

export default function Home() {
  const heroImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920&h=1080"
  const visionImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600"

  return (
    <div className="flex flex-col w-full relative">
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D2B44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.4]"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-white text-center">
            <KineticHeadline 
              lines={["NABWERU COMMUNITY"]} 
              className="text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 font-headline text-[#FFB800]"
              staggerDelay={0}
            />
            
            <KineticHeadline 
              lines={["SECURE YOUR", "FUTURE"]} 
              className="text-6xl md:text-[10rem] font-[900] uppercase tracking-tighter leading-[0.75] font-headline"
              staggerDelay={0.1}
            />
            
            <div className="w-24 h-3 bg-[#FFB800] mt-12 mb-8" />
            <p className="text-xl md:text-2xl font-body max-w-2xl mb-12 opacity-80">
              Transforming lives through cooperative savings and affordable credit solutions.
            </p>
            <ChevronDown className="h-10 w-10 animate-bounce opacity-60 text-[#FFB800]" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton strength={20}>
          <button className="bg-[#FFB800] text-[#003322] flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group">
            <div className="relative">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span className="font-bold text-lg">Chat with Advisor</span>
          </button>
        </MagneticButton>
      </div>

      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <KineticHeadline 
              lines={["FINANCIAL FREEDOM", "WITHIN YOUR REACH"]}
              className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-8 uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-xl mb-10 leading-relaxed font-body">
              Join a community of over 5,000 members dedicated to mutual growth. 
              Whether you're starting a business, buying a home, or saving for education, 
              we are your partner in progress.
            </InkFlowText>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#003322] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageReveal 
                src={visionImg}
                alt="SACCO Vision"
                className="rounded-lg shadow-2xl aspect-[4/3]"
                maskColor="bg-[#FFB800]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-white">
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm">Economic Empowerment</span>
              <KineticHeadline 
                lines={["COOPERATING FOR", "PROSPERITY"]}
                className="text-4xl md:text-6xl font-black uppercase font-headline leading-none"
              />
              <InkFlowText className="text-white/70 text-lg font-body leading-relaxed max-w-xl">
                Our cooperative model ensures that profits are returned to members in the form of competitive 
                interest rates and dividends. Your success is the community's success.
              </InkFlowText>
              <MagneticButton>
                <Link href="/donate">
                  <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90 text-[#003322] font-black h-16 px-10 rounded-full text-xl group">
                    Apply Now
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 shadow-sm border-t-4 border-[#FFB800] group hover:shadow-2xl transition-all duration-500">
              <ShieldCheck className="h-12 w-12 text-[#FFB800] mb-6" />
              <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Secure Savings</h3>
              <p className="text-muted-foreground mb-8 font-body">Tiered savings plans with high returns and complete transparency.</p>
              <Link href="/podcast" className="text-[#FFB800] font-black text-xs tracking-widest uppercase">Explore Plans →</Link>
            </div>
            <div className="bg-white p-12 shadow-sm border-t-4 border-[#FFB800] group hover:shadow-2xl transition-all duration-500">
              <TrendingUp className="h-12 w-12 text-[#FFB800] mb-6" />
              <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Affordable Credit</h3>
              <p className="text-muted-foreground mb-8 font-body">Quick processing, low interest rates, and flexible repayment terms.</p>
              <Link href="/sermons" className="text-[#FFB800] font-black text-xs tracking-widest uppercase">Loan Products →</Link>
            </div>
            <div className="bg-white p-12 shadow-sm border-t-4 border-[#FFB800] group hover:shadow-2xl transition-all duration-500">
              <Users className="h-12 w-12 text-[#FFB800] mb-6" />
              <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Financial Literacy</h3>
              <p className="text-muted-foreground mb-8 font-body">Free AI-powered financial advice and community workshops.</p>
              <Link href="/scripture-finder" className="text-[#FFB800] font-black text-xs tracking-widest uppercase">Talk to AI →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
