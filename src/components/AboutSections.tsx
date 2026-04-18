"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { Zap, TrendingUp, Cpu, Headset, Code2, Database, Globe, Layers, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseMe = () => {
  const features = [
    {
      title: "Fast Delivery",
      description: "Efficiency is key. I deliver high-performance code on time, every time.",
      icon: Zap,
      benefit: "Launch Faster",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Business-Focused",
      description: "I don't just build features; I build tools that generate ROI and growth.",
      icon: TrendingUp,
      benefit: "Maximize Profit",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Scalable Systems",
      description: "Solid architecture that grows alongside your business requirements.",
      icon: Cpu,
      benefit: "Future Proof",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Ongoing Support",
      description: "I'm with you for the long haul—updates, maintenance, and growth.",
      icon: Headset,
      benefit: "Peace of Mind",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <Section id="why-me" className="relative bg-gradient-to-br from-black via-gray-900/95 to-black">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <SectionHeading 
        title="Why Choose Me" 
        subtitle="Bridging the gap between engineering and measurable growth."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[32px] border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] mb-6`}>
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center text-white">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-4 font-light">
              {item.description}
            </p>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
              {item.benefit}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const About = () => {
  return (
    <Section id="about" className="relative bg-gradient-to-br from-black via-gray-900/95 to-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Column 1: Core Philosophy */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
            <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
            Core Engineering Philosophy
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1]">
            Bridging the gap
            between<br />
            <span className="text-blue-500">complexity</span> and 
            measurable 
            <span className="italic font-serif opacity-80"> ROI.</span>
          </h2>
          
          <p className="text-lg text-white/50 leading-relaxed font-light max-w-2xl">
            {CONTENT.about.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Code2 size={20} />
               </div>
               <div>
                 <div className="font-bold text-white mb-2 tracking-tight">Technical Mastery</div>
                 <div className="text-white/30 text-xs font-light leading-relaxed">Advanced MERN stack architecture designed for high-load performance and security.</div>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <TrendingUp size={20} />
               </div>
               <div>
                 <div className="font-bold text-white mb-2 tracking-tight">Business Logic</div>
                 <div className="text-white/30 text-xs font-light leading-relaxed">Custom logic built to increase conversion rates and automate complex business ops.</div>
               </div>
            </div>
          </div>
        </div>

        {/* Column 2: Stats Display */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-start gap-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center">
                 <div className="text-5xl font-black text-white mb-2 tracking-tighter">4+</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Years in Dev</div>
              </div>
              <div className="glass p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center">
                 <div className="text-5xl font-black text-white mb-2 tracking-tighter">50+</div>
                 <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Global Systems</div>
              </div>
           </div>

           <div className="glass p-10 rounded-[40px] border border-white/5 space-y-8">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Technical Expertise Area</div>
              <div className="flex flex-wrap gap-2">
                 {['Next.js', 'Node.js', 'Typescript', 'AWS', 'MongoDB', 'Docker'].map(skill => (
                   <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/40 font-bold uppercase tracking-widest">
                     {skill}
                   </span>
                 ))}
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-white/5 opacity-20">
                 <Database size={24} />
                 <Globe size={24} />
                 <Layers size={24} />
                 <Cpu size={24} />
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};
