'use client';

import Image from "next/image"
import { Shield, Target, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { BlurFocusText } from "@/components/BlurFocusText"
import { Separator } from "@/components/ui/separator"
import { ImageReveal } from "@/components/ImageReveal"

const leadership = [
  {
    name: "Mubiru Florence",
    role: "SACCO Chairperson",
    bio: "Dedicated to transparent leadership and community economic growth.",
    image: "https://picsum.photos/seed/leader1/400/500"
  },
  {
    name: "Kembabazi Rose",
    role: "Operations Manager",
    bio: "Ensuring efficient service delivery and member satisfaction.",
    image: "https://picsum.photos/seed/leader2/400/500"
  },
  {
    name: "Sebalamu Geoffrey",
    role: "Investment Director",
    bio: "Crafting sustainable wealth creation strategies for our members.",
    image: "https://picsum.photos/seed/leader3/400/500"
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale brightness-[0.3]"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1579621970795-87faff2f9050?auto=format&fit=crop&q=80&w=1920&h=1080)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["ABOUT OUR", "COOPERATIVE"]} 
            className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      <section className="py-32 bg-[#003322] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <BlurFocusText>
              <h2 className="text-[#FFB800] text-3xl md:text-5xl font-black uppercase font-serif tracking-tight">
                Mission & Vision
              </h2>
            </BlurFocusText>
            
            <div className="space-y-8">
              <InkFlowText delay={0.8} className="text-xl md:text-2xl font-body leading-relaxed text-white/90 italic">
                "To provide quality financial services that improve the socio-economic status of our members through a professional, transparent, and sustainable cooperative model."
              </InkFlowText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-[#2D2B44]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <KineticHeadline 
                lines={["THE JOURNEY", "OF GROWTH"]} 
                className="text-4xl md:text-6xl font-black uppercase font-headline tracking-tighter text-[#2D2B44]"
              />
              <Separator className="bg-[#2D2B44]/10 w-32 h-[2px]" />
              <InkFlowText className="text-muted-foreground text-lg leading-relaxed font-body">
                Founded in 2005 as a small savings group by 12 community members, Nabweru Community SACCO has grown into a leading financial institution serving over 5,000 members across Nabweru and greater Kampala.
              </InkFlowText>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-4xl font-black text-[#FFB800]">15+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years of Service</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-black text-[#FFB800]">5K+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Active Members</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800" 
                alt="SACCO Office" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <KineticHeadline 
              lines={["OUR LEADERSHIP"]} 
              className="text-4xl font-black uppercase font-headline text-[#2D2B44] mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto">
              Guided by a board of directors committed to financial integrity and member empowerment.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <div key={i} className="flex flex-col space-y-6 slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                  <ImageReveal 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-black font-headline text-[#2D2B44] uppercase">{member.name}</h3>
                  <p className="text-[#FFB800] font-bold uppercase tracking-widest text-xs">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2D2B44] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["READY TO START", "SAVING?"]} 
            className="text-4xl md:text-6xl font-black uppercase font-headline mb-8"
          />
          <MagneticButton>
            <Button className="bg-[#FFB800] text-[#2D2B44] hover:bg-[#FFB800]/90 font-black h-16 px-10 rounded-full text-xl group">
              JOIN THE SACCO <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
