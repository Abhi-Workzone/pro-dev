"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { Button } from "./ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToContact } from "@/utils/scrollToContact";

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-gradient-to-br from-black via-gray-900/95 to-black">
      <SectionHeading 
        title="Investment" 
        subtitle="Transparent pricing for businesses ready to scale."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CONTENT.pricing.map((tier, idx) => (
          <div 
            key={idx}
            className={cn(
              "relative p-8 rounded-3xl flex flex-col transition-all duration-300 cursor-pointer hover:scale-105",
              tier.popular 
                ? "bg-blue-600/10 border-blue-500/50 border-2 scale-105 shadow-[0_0_40px_rgba(37,99,235,0.15)]" 
                : "glass border-white/10"
            )}
            onClick={scrollToContact}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-blue-400">Based on discussion</span>
                <span className="text-white/60 text-sm">&</span>
                <span className="text-lg font-semibold text-purple-400">requirement</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-3 text-sm text-white/70">
                  <Check size={18} className="text-blue-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              variant={tier.popular ? "secondary" : "outline"} 
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                scrollToContact();
              }}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};
