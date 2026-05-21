'use client';

import Image from "next/image"
import { Shield, Target, Award, ArrowRight, School } from "lucide-react"
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
    bio: "Visionary leader focused on expanding the K-unity reach and member wealth.",
    image: "https://picsum.photos/seed/leader1/400/500"
  },
  {
    name: "Kembabazi Rose",
    role: "Operations Manager",
    bio: "Ensuring efficient service delivery and maintaining the Kololo heritage.",
    image: "/images/IMG_8891.jpg"
  },
  {
    name: "Sebalamu Geoffrey",
    role: "Investment Director",
    bio: "Developing sustainable portfolios for our diverse membership base.",
    image: "https://picsum.photos/seed/leader3/400/500"
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[50vh] lg:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-[#0b1f3a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.25]"
            style={{
              backgroundImage: `url(https://mulengeranews.com/wp-content/uploads/2026/03/20260316_141702-750x422.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["ABOUT K-UNITY", "FINANCE SACCO"]} 
            className="text-4xl sm:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#c9922a]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#0b1f3a] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
            <BlurFocusText>
              <h2 className="text-[#c9922a] text-2xl sm:text-3xl md:text-5xl font-black uppercase font-serif tracking-tight leading-tight">
                Roots in Excellence
              </h2>
            </BlurFocusText>
            
            <div className="space-y-6 lg:space-y-8">
              <InkFlowText delay={0.8} className="text-lg sm:text-xl md:text-2xl font-body leading-relaxed text-white/90 italic">
                "The 'K' in K-unity represents Kololo High School, our origin and inspiration. We provide quality financial services that improve the socio-economic status of our members through a transparent, professional model."
              </InkFlowText>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white text-[#0b1f3a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <KineticHeadline 
                lines={["A LEGACY OF", "FINANCIAL UNITY"]} 
                className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase font-headline tracking-tighter text-[#0b1f3a] leading-tight"
              />
              <Separator className="bg-[#0b1f3a]/10 w-32 h-[2px]" />
              <InkFlowText className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body">
                K-unity Finance SACCO was established by the alumni and community of Kololo High School. What began as a small savings group has evolved into a premier financial institution serving thousands across Uganda.
              </InkFlowText>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4">
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#c9922a]">20+</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Years of Heritage</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#c9922a]">12K+</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Active Members</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageReveal 
                src="https://media.gettyimages.com/id/1151368592/photo/taxi-with-the-taxi-driver-posing-in-hillbrow-johannesburg.jpg?s=612x612&w=0&k=20&c=4m9x8pDnLB3I2OogORjG_t4rxzAFyx4Tp_jvq1zUcac=" 
                alt="Entrepreneurial Spirit" 
                className="w-full h-full transition-all duration-1000"
                maskColor="bg-[#0b1f3a]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#faf8f3]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <KineticHeadline 
              lines={["OUR LEADERSHIP"]} 
              className="text-3xl sm:text-4xl font-black uppercase font-headline text-[#0b1f3a] mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Guided by a board of directors committed to financial integrity and member empowerment.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {leadership.map((member, i) => (
              <div key={i} className="flex flex-col space-y-6 slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                  <ImageReveal 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full transition-all duration-700"
                    maskColor="bg-[#c9922a]"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black font-headline text-[#0b1f3a] uppercase leading-tight">{member.name}</h3>
                  <p className="text-[#c9922a] font-bold uppercase tracking-widest text-[10px] sm:text-xs">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#0b1f3a] text-white text-center px-6">
        <div className="container mx-auto">
          <KineticHeadline 
            lines={["SECURE YOUR", "FUTURE TODAY"]} 
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-headline mb-8 leading-tight"
          />
          <MagneticButton className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#c9922a] text-white hover:bg-[#e8b455] font-black h-16 sm:h-20 px-10 rounded-full text-lg sm:text-xl group">
              JOIN K-UNITY <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
