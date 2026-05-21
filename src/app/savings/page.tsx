'use client';

import React from "react";
import { PiggyBank, ArrowRight, TrendingUp, ShieldCheck, Wallet, Landmark, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { BlurFocusText } from "@/components/BlurFocusText";
import { ImageReveal } from "@/components/ImageReveal";

const savingPlans = [
  {
    id: "01",
    title: "Regular Savings",
    description: "The foundation of your membership. Save daily, weekly, or monthly and earn competitive annual dividends based on your balance.",
    benefits: ["Flexible deposits", "Earn dividends", "Loan eligibility"],
    image: "https://picsum.photos/seed/save1/600/600"
  },
  {
    id: "02",
    title: "Fixed Deposit Accounts",
    description: "Lock your surplus funds for a set period and enjoy the highest interest rates in the cooperative sector. Secure and profitable.",
    benefits: ["High interest rates", "6-24 month terms", "Guaranteed returns"],
    image: "https://picsum.photos/seed/save2/600/600"
  },
  {
    id: "03",
    title: "Junior Savings Plan",
    description: "Invest in your child's future today. A dedicated account to help you save for school fees and a head start for your children.",
    benefits: ["No monthly fees", "Gift at maturity", "Education focused"],
    image: "https://picsum.photos/seed/save3/600/600"
  },
  {
    id: "04",
    title: "Target Savings",
    description: "Saving for a specific goal like a plot of land or a wedding? Our target account keeps you disciplined and on track.",
    benefits: ["Goal tracking", "Bonus interest", "Withdrawal on target"],
    image: "https://picsum.photos/seed/save4/600/600"
  }
];

export default function SavingsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full lg:h-[85vh] flex flex-col lg:flex-row border-b border-[#c9922a]/10 bg-[#0b1f3a]">
        {/* Left: Visual Context */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-[#060f1e]">
          <BlurFocusText className="relative aspect-square w-full max-w-md">
             <div className="absolute inset-0 bg-[#c9922a]/20 blur-3xl rounded-full scale-110 opacity-30 animate-pulse" />
             <ImageReveal 
              src="https://www.4x4uganda.com/wp-content/uploads/2023/01/Nakasero-Market-Kampala.jpg" 
              alt="Local Market Prosperity" 
              className="w-full h-full shadow-2xl rounded-[16px]"
              maskColor="bg-[#0b1f3a]"
            />
          </BlurFocusText>
        </div>

        {/* Right: Content Block */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-24 text-white">
          <div className="space-y-4 mb-6 lg:mb-8">
            <span className="text-[#c9922a] font-headline font-bold text-xs sm:text-sm tracking-[0.4em] block uppercase">
              SECURE YOUR FUTURE
            </span>
            <div className="flex flex-col">
              <span className="text-[#c9922a] text-base sm:text-lg font-bold font-serif italic">Interest up to</span>
              <span className="text-6xl sm:text-8xl lg:text-[10rem] font-black leading-none font-serif text-white">12%</span>
            </div>
          </div>
          
          <KineticHeadline 
            lines={["GROW YOUR", "WEALTH WITH", "K-UNITY"]} 
            className="text-4xl sm:text-6xl lg:text-8xl font-serif font-bold uppercase leading-[0.85] mb-8 lg:mb-12"
          />

          <div className="flex items-center space-x-6 sm:space-x-8">
            <MagneticButton strength={30}>
              <button className="bg-[#c9922a] text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-transform">
                <PiggyBank className="h-8 w-8 sm:h-10 sm:w-10 transition-transform" />
              </button>
            </MagneticButton>
            <div className="space-y-1">
              <p className="font-bold text-lg sm:text-xl font-serif">Start Saving Today</p>
              <p className="text-white/60 text-xs sm:text-sm font-body">Regulated by UMRA • Secure & Transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 lg:py-24 bg-[#faf8f3]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex items-center space-x-6">
              <div className="bg-[#0b1f3a] p-4 rounded-xl text-[#c9922a] shrink-0">
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1f3a] text-sm sm:text-base">100% Secure</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Regulated by UMRA Uganda</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-[#c9922a] p-4 rounded-xl text-white shrink-0">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1f3a] text-sm sm:text-base">High Returns</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Competitive interest & dividends</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-[#0b1f3a] p-4 rounded-xl text-[#c9922a] shrink-0">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1f3a] text-sm sm:text-base">Flexible Access</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Withdraw when you need it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Savings Plans Archive */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-12 lg:mb-16">
            <KineticHeadline 
              lines={["SAVINGS", "SOLUTIONS"]} 
              className="text-[#0b1f3a] text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4"
            />
            <div className="h-1 w-24 bg-[#c9922a]" />
          </div>

          <div className="space-y-0">
            {savingPlans.map((plan, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row items-center py-12 lg:py-16 border-b border-[#0b1f3a]/5 hover:bg-[#faf8f3] transition-colors px-6 -mx-6 rounded-2xl"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 mb-8 md:mb-0 md:mr-12">
                  <ImageReveal 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover transition-all duration-700 rounded-2xl shadow-lg"
                    maskColor="bg-[#0b1f3a]"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-1">
                    <span className="text-[#c9922a] font-bold text-[10px] sm:text-sm tracking-widest uppercase">PLAN {plan.id}</span>
                    <span className="hidden md:block text-[#0b1f3a]/10">•</span>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0 justify-center md:justify-start">
                      {plan.benefits.map((b, bi) => (
                        <span key={bi} className="text-[#0b1f3a]/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-[#0b1f3a]/10 px-2 py-0.5 rounded-full">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a] font-serif transition-colors leading-tight">
                    {plan.title}
                  </h3>
                  <InkFlowText className="text-[#5a6070] font-body text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                    {plan.description}
                  </InkFlowText>
                </div>

                {/* Button */}
                <div className="mt-8 lg:mt-0 md:ml-12 flex flex-col items-center md:items-end w-full md:w-auto">
                  <MagneticButton className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#0b1f3a] text-white hover:bg-[#c9922a] transition-colors font-bold rounded-full h-14 sm:h-16 px-10 group">
                      OPEN ACCOUNT <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 lg:py-32 bg-[#0b1f3a] text-white text-center px-6">
        <div className="container mx-auto">
          <KineticHeadline 
            lines={["START YOUR JOURNEY", "TO FINANCIAL FREEDOM"]} 
            className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold uppercase mb-8 lg:mb-12 leading-tight"
          />
          <MagneticButton strength={30} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#c9922a] text-white hover:bg-[#e8b455] font-bold h-16 sm:h-20 px-10 lg:px-16 rounded-full text-lg sm:text-2xl group transition-all duration-500 shadow-2xl">
              JOIN K-UNITY TODAY <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
