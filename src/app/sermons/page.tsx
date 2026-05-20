'use client';

import { ArrowRight, Landmark, Briefcase, GraduationCap, Home, Car, Tractor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "BUSINESS LOANS",
    description: "Scale your enterprise with our low-interest business credit. We provide flexible repayment plans tailored to your cash flow cycles.",
    image: "https://images.unsplash.com/photo-1556740734-7f95626904ff?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="h-10 w-10 text-[#FFB800]" />,
    bgColor: "bg-[#3E3E4E]",
    btnClass: "bg-[#FFB800] text-[#3E3E4E]"
  },
  {
    title: "AGRI-BUSINESS",
    description: "Empowering farmers with equipment loans and seasonal input financing. Boost your productivity with specialized agricultural credit.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&q=80&w=800",
    icon: <Tractor className="h-10 w-10 text-[#FFB800]" />,
    bgColor: "bg-[#003322]",
    btnClass: "border-[#FFB800] text-[#FFB800]"
  },
  {
    title: "SCHOOL FEES LOAN",
    description: "Invest in your children's future without the stress. Our education loans are processed quickly to meet school opening deadlines.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    icon: <GraduationCap className="h-10 w-10 text-[#FFB800]" />,
    bgColor: "bg-[#3E3E4E]",
    btnClass: "bg-[#FFB800] text-[#3E3E4E]"
  },
  {
    title: "ASSET FINANCING",
    description: "Acquire land, machinery, or vehicles through our structured asset financing. Own your assets while you pay back gradually.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="h-10 w-10 text-[#FFB800]" />,
    bgColor: "bg-[#003322]",
    btnClass: "border-[#FFB800] text-[#FFB800]"
  }
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 grayscale brightness-[0.3]"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1920)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["OUR LOAN", "PRODUCTS"]} 
            className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {products.map((prod, i) => (
        <section key={i} className="relative w-full">
          <div className={cn(
            "flex flex-col lg:flex-row min-h-[600px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              <ImageReveal 
                src={prod.image} 
                alt={prod.title} 
                className="w-full h-full grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                maskColor={prod.bgColor === "bg-[#3E3E4E]" ? "bg-[#3E3E4E]" : "bg-[#003322]"}
              />
            </div>

            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24",
              prod.bgColor,
              "text-white"
            )}>
              <div className="max-w-md space-y-8">
                <div className="mb-4">{prod.icon}</div>
                <KineticHeadline 
                  lines={[prod.title]} 
                  className="text-4xl md:text-5xl font-bold font-serif text-[#FFB800]"
                />
                <InkFlowText delay={0.8} className="text-lg md:text-xl font-body leading-relaxed opacity-90">
                  {prod.description}
                </InkFlowText>
                <div className="pt-4">
                  <MagneticButton>
                    <Button className={cn("h-16 px-12 rounded-full font-black text-xl group", prod.btnClass)}>
                      APPLY NOW <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 bg-[#003322] text-white text-center">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["NEED A CUSTOM PLAN?"]} 
            className="text-4xl md:text-7xl font-black uppercase font-headline mb-12"
          />
          <MagneticButton>
            <Button variant="outline" className="border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-20 px-12 rounded-full text-2xl group transition-all duration-500">
              CONTACT AN ADVISOR <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
