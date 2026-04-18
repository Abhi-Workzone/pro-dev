"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { 
  Rocket, BookOpen, MapPin, SquarePlus, Store, Shirt, Zap, 
  Utensils, ShoppingCart, Home, Activity, Car, Film, Users,
  LucideIcon 
} from "lucide-react";
import { motion } from "framer-motion";

export const WhoIHelp = () => {
  const ICON_MAP: Record<string, LucideIcon> = {
    Rocket, BookOpen, MapPin, SquarePlus, Store, Shirt, Zap, 
    Utensils, ShoppingCart, Home, Activity, Car, Film, Users
  };

  const row1 = CONTENT.whoIWorkWith.slice(0, 6);
  const row2 = CONTENT.whoIWorkWith.slice(6, 12);

  return (
    <Section id="who-i-work-with" className="bg-gradient-to-br from-black via-gray-900/95 to-black" style={{ perspective: '1000px' }}>
      <SectionHeading 
        title="Who I Work With" 
        subtitle="Diversified expertise across various high-growth industries."
        centered
      />
      
      <div className="max-w-7xl mx-auto px-4 mt-20 space-y-12" style={{ transformStyle: 'preserve-3d' }}>
        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {row1.map((item, idx) => {
            const Icon = ICON_MAP[item.icon as string];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20, rotateY: -15, translateZ: -50 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, translateZ: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  translateZ: 30,
                  y: -10
                }}
                className="flex flex-col items-center group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center mb-6">
                  <span className="text-[10px] md:text-sm font-bold tracking-tight text-white whitespace-nowrap">{item.title}</span>
                  <div className="flex flex-col items-center mt-2 opacity-70">
                    <div className="w-1 h-1 rounded-full bg-white mb-1" style={{ backgroundColor: item.color }} />
                    <div className="w-px h-8 border-l border-dotted border-white/50" />
                  </div>
                </div>
                
                <motion.div 
                  className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-2xl"
                  style={{ 
                    backgroundColor: item.color || '#333',
                    borderRadius: '50% 50% 50% 0', // Leaf shape
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 15,
                    boxShadow: `0 20px 40px -15px ${item.color}80`
                  }}
                  transition={{ duration: 0.3 }}
                >
                    <div className="text-white drop-shadow-md">
                        {Icon && <Icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />}
                    </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 pt-6">
          {row2.map((item, idx) => {
            const Icon = ICON_MAP[item.icon as string];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: -20, rotateY: 15, translateZ: -50 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, translateZ: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: -10,
                  translateZ: 30,
                  y: 10
                }}
                className="flex flex-col-reverse items-center group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-center mt-6">
                  <div className="flex flex-col-reverse items-center mt-2 opacity-70">
                    <div className="w-1 h-1 rounded-full bg-white mt-1" style={{ backgroundColor: item.color }} />
                    <div className="w-px h-8 border-l border-dotted border-white/50" />
                  </div>
                  <span className="text-[10px] md:text-sm font-bold tracking-tight text-white whitespace-nowrap">{item.title}</span>
                </div>
                
                <motion.div 
                  className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-2xl"
                  style={{ 
                    backgroundColor: item.color || '#333',
                    borderRadius: '0 50% 50% 50%', // Leaf shape (reversed)
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: -15,
                    boxShadow: `0 20px 40px -15px ${item.color}80`
                  }}
                  transition={{ duration: 0.3 }}
                >
                    <div className="text-white drop-shadow-md">
                        {Icon && <Icon className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />}
                    </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
