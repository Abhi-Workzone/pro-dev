"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { Phone, FileText, Handshake, CreditCard, Rocket, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export const Process = () => {
  const ICON_MAP: Record<string, LucideIcon> = {
    Phone,
    FileText,
    Handshake,
    CreditCard,
    Rocket,
  };

  return (
    <Section id="how-i-work" className="bg-gradient-to-br from-black via-gray-900/95 to-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <SectionHeading 
        title="My Process" 
        subtitle="A high-performance onboarding experience designed for clarity and speed."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mt-20">
        {CONTENT.howIWork.map((step, idx) => {
          const Icon = ICON_MAP[step.icon as string];
          return (
            <motion.div 
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="relative group"
            >
              {/* The Card Component */}
              <div className="relative pt-12 pb-16 px-6 bg-white/[0.03] border border-white/5 rounded-[40px] h-full flex flex-col items-center text-center backdrop-blur-md transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20">
                
                {/* Top Badge (Floating) */}
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full ${step.color} p-0.5 shadow-xl shadow-black/40`}>
                    <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center text-white">
                        {Icon && <Icon size={24} strokeWidth={1.5} />}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-4 mt-4 tracking-tight leading-tight px-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {step.description}
                </p>

                {/* Bottom Step Indicator */}
                <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full ${step.color} text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                  Step 0{step.step}
                </div>
              </div>

              {/* Connecting Dot/Line for Desktop */}
              {idx < CONTENT.howIWork.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
