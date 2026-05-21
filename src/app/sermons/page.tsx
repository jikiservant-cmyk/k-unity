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
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHfVo1p5cGcag/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1713929793032?e=2147483647&v=beta&t=q_qaJdYmlc5QVwX6OpBhxk2S1vpkdq1nNi-59odRW-A",
    icon: <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-[#FFB800]" />,
    bgColor: "bg-[#3E3E4E]",
    btnClass: "bg-[#FFB800] text-[#3E3E4E]"
  },
  {
    title: "AGRI-BUSINESS",
    description: "Empowering farmers with equipment loans and seasonal input financing. Boost your productivity with specialized agricultural credit.",
    image: "https://coffeeheads.com/wp-content/uploads/2018/04/Blog-Pic-Harvesting__1597682371_94.206.192.97.jpg",
    icon: <Tractor className="h-8 w-8 sm:h-10 sm:w-10 text-[#FFB800]" />,
    bgColor: "bg-[#003322]",
    btnClass: "border-[#FFB800] text-[#FFB800]"
  },
  {
    title: "SCHOOL FEES LOAN",
    description: "Invest in your children's future without the stress. Our education loans are processed quickly to meet school opening deadlines.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    icon: <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-[#FFB800]" />,
    bgColor: "bg-[#3E3E4E]",
    btnClass: "bg-[#FFB800] text-[#3E3E4E]"
  },
  {
    title: "ASSET FINANCING",
    description: "Acquire land, machinery, or vehicles through our structured asset financing. Own your assets while you pay back gradually.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="h-8 w-8 sm:h-10 sm:w-10 text-[#FFB800]" />,
    bgColor: "bg-[#003322]",
    btnClass: "border-[#FFB800] text-[#FFB800]"
  }
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.25]"
            style={{
              backgroundImage: `url(https://www.4x4uganda.com/wp-content/uploads/2023/01/Nakasero-Market-Kampala.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["OUR LOAN", "PRODUCTS"]} 
            className="text-4xl sm:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] font-headline text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {products.map((prod, i) => (
        <section key={i} className="relative w-full overflow-hidden">
          <div className={cn(
            "flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
              <ImageReveal 
                src={prod.image} 
                alt={prod.title} 
                className="w-full h-full transition-all duration-1000"
                maskColor={prod.bgColor === "bg-[#3E3E4E]" ? "bg-[#3E3E4E]" : "bg-[#003322]"}
              />
            </div>

            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24",
              prod.bgColor,
              "text-white"
            )}>
              <div className="max-w-md space-y-6 sm:space-y-8 w-full">
                <div className="mb-4">{prod.icon}</div>
                <KineticHeadline 
                  lines={[prod.title]} 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#FFB800] leading-tight"
                />
                <InkFlowText delay={0.8} className="text-base sm:text-lg md:text-xl font-body leading-relaxed opacity-90">
                  {prod.description}
                </InkFlowText>
                <div className="pt-4">
                  <MagneticButton className="w-full sm:w-auto">
                    <Button className={cn("w-full sm:w-auto h-16 px-12 rounded-full font-black text-lg sm:text-xl group", prod.btnClass)}>
                      APPLY NOW <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-32 bg-[#003322] text-white text-center px-6">
        <div className="container mx-auto">
          <KineticHeadline 
            lines={["NEED A CUSTOM PLAN?"]} 
            className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase font-headline mb-8 lg:mb-12 leading-tight"
          />
          <MagneticButton className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#003322] font-black h-16 sm:h-20 px-10 lg:px-12 rounded-full text-lg sm:text-2xl group transition-all duration-500">
              CONTACT AN ADVISOR <ArrowRight className="ml-2 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
