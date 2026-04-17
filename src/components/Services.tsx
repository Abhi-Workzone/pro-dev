"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { ArrowRight, Code2, Calendar, ShoppingBag, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToContact } from "@/utils/scrollToContact";

export const Services = () => {
  const icons = [Code2, Calendar, ShoppingBag, Settings];

  return (
    <Section id="services" className="relative bg-gradient-to-br from-black via-gray-900/95 to-black" style={{ perspective: '1000px' }}>
      <SectionHeading 
        title="Services" 
        subtitle="End-to-end engineering services designed to scale your operations."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {CONTENT.services.map((service, idx) => {
          const Icon = icons[idx] || Code2;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30, rotateX: -10, translateZ: -50 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                rotateX: 5,
                translateZ: 30,
                boxShadow: '0 30px 60px -20px rgba(59, 130, 246, 0.4)'
              }}
              className="group flex flex-col p-10 rounded-[2.5rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-500 overflow-hidden relative cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={scrollToContact}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                whileHover={{ 
                  backgroundColor: 'rgb(59 130 246 / 0.15)',
                  scale: 1.5
                }}
              />
              
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 text-white/40"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 15,
                  borderColor: 'rgb(59 130 246 / 0.5)',
                  color: 'rgb(59 130 246)',
                  boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={28} strokeWidth={1.5} />
              </motion.div>

              <motion.h3 
                className="text-3xl font-bold mb-4 tracking-tight"
                whileHover={{ scale: 1.05, color: '#3B82F6' }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-white/40 mb-10 grow leading-relaxed font-light text-lg"
                whileHover={{ color: '#FFFFFF99' }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
              
              <motion.button 
                className="flex items-center gap-3 text-xs font-black uppercase cursor-pointer tracking-[0.25em] text-white/40 transition-all"
                whileHover={{ 
                  color: '#3B82F6',
                  x: 5
                }}
                transition={{ duration: 0.3 }}
              >
                {service.cta}
                <motion.div 
                  className="h-px bg-white/10"
                  initial={{ width: '2rem' }}
                  whileHover={{ 
                    width: '3rem',
                    backgroundColor: 'rgb(59 130 246)'
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
